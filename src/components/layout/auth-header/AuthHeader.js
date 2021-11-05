import "./AuthHeader.css";
import { router } from "../../../router/router";
export class AuthHeader {
  constructor() {
    this.element = document.createElement("header");
    this.element.id = "auth-header";
    this.element.className = "auth-header";
    const p = document.createElement("p");
    p.className = "auth-header-brand";
    p.innerHTML = "N<sup>2</sup>IPD";
    p.addEventListener("click", () => {
      router.currentPath = "/auth";
    });
    const ul = document.createElement("ul");
    ul.className = "auth-header-navigation-list";
    ul.appendChild(
      (function () {
        const li = document.createElement("li");
        li.className = "auth-header-navigation-list_item";
        const link = document.createElement("a");
        link.className = "auth-header-navigation-list_link";
        link.textContent = "Documentation";
        li.appendChild(link);
        return li;
      })()
    );
    ul.appendChild(
      (function () {
        const li = document.createElement("li");
        li.className = "auth-header-login-link_item login-link";
        const link = document.createElement("a");
        link.className = "auth-header-login-link_link";
        link.textContent = "LOGIN";
        li.appendChild(link);
        return li;
      })()
    );
    ul.appendChild(
      (function () {
        const li = document.createElement("li");
        li.className = "auth-header-signup-link_item signup-link";
        const link = document.createElement("a");
        link.className = "auth-header-signup-link_link";
        link.textContent = "SIGNUP";
        li.appendChild(link);
        return li;
      })()
    );
    this.element.appendChild(p);
    this.element.appendChild(ul);
    return this.element;
  }
}
