import "./Header.css";
import { router } from "../../../router/router";
import { logout } from "../../../services/api";
import Logo from "../../../assets/logo.svg";

export class Header {
  constructor() {
    this.element = document.createElement("header");
    this.element.id = "main-header";
    this.element.className = "header";

    const div = document.createElement("div");
    div.className = "header-main";

    const logo = document.createElement("img");
    logo.className = "header-brand";
    logo.src = Logo;
    logo.addEventListener("click", () => {
      router.currentPath = "/";
    });

    div.appendChild(logo);

    const ham = document.createElement("a");
    ham.className = "header-ham";
    ham.addEventListener("click", () => {
      if (this.element.classList.contains("visible")) {
        this.element.classList.remove("visible");
      } else {
        this.element.classList.add("visible");
      }
    });
    const span = document.createElement("span");
    ham.appendChild(span);
    div.appendChild(ham);

    const ul = document.createElement("ul");
    ul.className = "header-nav-list";
    ul.appendChild(
      (function () {
        const li = document.createElement("li");
        li.className = "header-nav-list_item";
        const link = document.createElement("a");
        link.className = "header-nav-list_link";
        link.textContent = "Documentation";
        link.addEventListener("click", () => {
          window.open(
            "https://documenter.getpostman.com/view/12827259/UVC3jnSk",
            "_blank"
          );
        });
        li.appendChild(link);
        return li;
      })()
    );
    ul.appendChild(
      (function () {
        const li = document.createElement("li");
        li.className = "header-nav-list_item";
        const link = document.createElement("a");
        link.className = "header-nav-list_link";
        link.textContent = "Members";
        link.addEventListener("click", () => {
          router.currentPath = "/members";
        });
        li.appendChild(link);
        return li;
      })()
    );
    ul.appendChild(
      (function () {
        const li = document.createElement("li");
        li.className = "header-nav-list_item";
        const link = document.createElement("a");
        link.className = "header-nav-list_link";
        link.textContent = "Profile";
        link.addEventListener("click", () => {
          router.currentPath = "/profile";
        });
        li.appendChild(link);
        return li;
      })()
    );
    ul.appendChild(
      (function () {
        const li = document.createElement("li");
        li.className = "header-nav-list_item";
        const link = document.createElement("a");
        link.className = "header-nav-list_link logout-btn";
        link.textContent = "Logout";
        link.addEventListener("click", () => {
          logout();
        });
        li.appendChild(link);
        return li;
      })()
    );
    this.element.appendChild(div);
    this.element.appendChild(ul);
    return this.element;
  }
}
