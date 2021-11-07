import "core-js/stable";
import "windi.css";
import "./styles/main.css";
import { router } from "./router/router";
import { AuthState } from "./store/auth";
import { BaseLoader } from "./components/base/base-loader/BaseLoader";
import { BaseNotifier } from "./components/base/base-notifier/BaseNotifier";
import { ProfileState } from "./store/profile";
import routes from "./router/routes";

class App {
  currentPage = null;
  constructor() {
    this.el = document.querySelector("body");
    new BaseLoader();
    new BaseNotifier();
  }

  async render(page) {
    delete this.currentPage;
    if (this.el.firstElementChild) {
      this.el.removeChild(this.el.firstElementChild);
    }

    const pathFound = routes.find((route) => route.path === page.path);
    if (pathFound) {
      const pageClass = (await page.func()).default;
      const view = new page.layout(pageClass);
      this.currentPage = view;
      this.el.insertAdjacentElement("afterbegin", view);
      if (
        page.path === "/auth" ||
        page.path === "/login" ||
        page.path === "/signup"
      ) {
        const loginLinks = document.querySelectorAll(".login-link");
        const signupLinks = document.querySelectorAll(".signup-link");
        loginLinks.forEach((link) => {
          link.addEventListener("click", () => {
            router.currentPath = "/login";
          });
        });
        signupLinks.forEach((link) => {
          link.addEventListener("click", () => {
            router.currentPath = "/signup";
          });
        });
      }
    } else {
      const errorLayout = routes.find((route) => route.path === "/*");
      const pageClass = (await errorLayout.func()).default;
      const view = new errorLayout.layout(pageClass);
      this.currentPage = view;
      this.el.insertAdjacentElement("afterbegin", view);
    }
  }
}

export const app = new App();

const path = window.location.pathname;
const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn === null) {
  localStorage.setItem("isLoggedIn", false);
  if (path !== "/signup" && path !== "/login") {
    router.currentPath = "/auth";
  } else {
    router.currentPath = path;
  }
} else {
  if (isLoggedIn === "true") {
    const profile = JSON.parse(localStorage.getItem("profile"));
    AuthState.isLoggedIn = true;
    ProfileState.profile = profile;
    if (path !== "/auth") {
      router.currentPath = path;
    } else {
      router.currentPath = "/";
    }
  } else if (isLoggedIn == "false") {
    if (path !== "/signup" && path !== "/login") {
      router.currentPath = "/auth";
    } else {
      router.currentPath = path;
    }
  }
}

window.addEventListener("popstate", (e) => {
  router.currentPath = e.target.location.pathname;
});
