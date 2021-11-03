import "windi.css";
import "./styles/main.css";
import { router } from "./router/router";
import { AuthState } from "./store/auth";
import { MainLayout } from "./layouts/MainLayout";
import { AuthLayout } from "./layouts/AuthLayout";

class App {
  constructor() {
    this.routes = router.routes;
    this.el = document.querySelector("body");
  }

  render(page) {
    if (this.el.firstElementChild) {
      this.el.removeChild(this.el.firstElementChild);
    }
    if (
      page.path !== "/auth" &&
      page.path !== "/login" &&
      page.path !== "/signup"
    ) {
      this.el.insertAdjacentElement(
        "afterbegin",
        new MainLayout(page.func, this.routes)
      );
      document.querySelectorAll(".nav-list--link").forEach((nav_link) => {
        if (nav_link.textContent === page.name) {
          nav_link.classList.add("active");
        } else {
          nav_link.classList.remove("active");
        }
      });
    } else {
      this.el.insertAdjacentElement("afterbegin", new AuthLayout(page.func));
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
    AuthState.isLoggedIn = true;
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

document.body.appendChild(
  (function () {
    const element = document.createElement("div");
    element.className = "loader";
    return element;
  })()
);

window.addEventListener("popstate", (e) => {
  router.currentPath = e.target.location.pathname;
});
