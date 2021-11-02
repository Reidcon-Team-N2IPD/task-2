import "windi.css";
import { routerProxy } from "./router/router";
import { Header } from "./components/layout/header/header";

class App {
  constructor() {
    this.routes = routerProxy.routes;
    this.el = document.querySelector("body");
    this.el.appendChild(new Header(this.routes));
  }

  render(page) {
    if (this.el.firstElementChild.nextElementSibling) {
      this.el.removeChild(this.el.firstElementChild.nextElementSibling);
    }
    this.el.appendChild(new page.func());

    document.querySelectorAll(".nav-list--link").forEach((nav_link) => {
      if (nav_link.textContent === page.name) {
        nav_link.classList.add("active");
      } else {
        nav_link.classList.remove("active");
      }
    });
  }
}

export const app = new App();
const path = window.location.pathname;
const route = routerProxy.routes.find((route) => route.path === path);
app.render(route);

window.addEventListener("popstate", (e) => {
  routerProxy.currentPath = e.target.location.pathname;
});
