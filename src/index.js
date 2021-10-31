import "windi.css";
import { routes } from "./router/routes";
import { Header } from "./components/layout/header/header";

class App {
  constructor(routes) {
    this.routes = routes;
    this.el = document.querySelector("body");
    this.el.innerHTML = new Header(this.routes).element;
  }

  render(page = "Home") {
    if (window.location.hash === "") {
      window.location.hash = "#/";
    }
    if (this.el.firstElementChild.nextElementSibling) {
      this.el.removeChild(this.el.firstElementChild.nextElementSibling);
    }
    const view = this.routes.find((route) => {
      return route.name == page;
    });
    this.el.firstElementChild.insertAdjacentHTML(
      "afterend",
      new view.func().element
    );

    document.querySelectorAll(".nav-list--link").forEach((nav_link) => {
      if (nav_link.hash === window.location.hash) {
        nav_link.classList.add("active");
      } else {
        nav_link.classList.remove("active");
      }
    });
  }
}

export const app = new App(routes);
app.render();

window.addEventListener("hashchange", (e) => {
  const hash = window.location.hash.replace("#", "");

  const view = routes.find((route) => {
    return route.path == hash;
  });

  app.render(view.name);
});
