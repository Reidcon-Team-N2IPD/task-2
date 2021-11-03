import "windi.css";
import { router } from "./router/router";
import { Header } from "./components/layout/header/header";
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
    if (page.path !== "/auth") {
      this.el.appendChild(new MainLayout(page.func, this.routes));
      document.querySelectorAll(".nav-list--link").forEach((nav_link) => {
        if (nav_link.textContent === page.name) {
          nav_link.classList.add("active");
        } else {
          nav_link.classList.remove("active");
        }
      });
    } else {
      this.el.appendChild(new AuthLayout(page.func));
    }
  }
}

export const app = new App();
const path = window.location.pathname;

const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn === null) {
  localStorage.setItem("isLoggedIn", false);

  router.currentPath = "/auth";
} else {
  if (isLoggedIn === "true") {
    AuthState.isLoggedIn = true;
    if (path !== "/auth") {
      router.currentPath = path;
    } else {
      router.currentPath = "/";
    }
  } else if (isLoggedIn == "false") {
    router.currentPath = "/auth";
  }
}

window.addEventListener("popstate", (e) => {
  router.currentPath = e.target.location.pathname;
});
