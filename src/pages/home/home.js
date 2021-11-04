import { AuthState } from "../../store/auth";
import "./Home.css";

export class HomePage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className = "home-page";

    this.element.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "text-5xl text-dark-600";
        h1.textContent = "Home Page";
        return h1;
      })()
    );

    this.element.appendChild(
      (function () {
        const logoutBtn = document.createElement("button");
        logoutBtn.className =
          "text-2xl text-white bg-dark-800 my-8 py-4 px-20 rounded-full shadow-sm shadow-dark-500 hover:(transform bg-dark-600 shadow-2xl shadow-dark-800 -translate-y-2) active:( transform bg-dark-100 shadow-2xl shadow-dark-800 -translate-y-1) transition-all";
        logoutBtn.textContent = "Logout";
        logoutBtn.addEventListener("click", () => {
          AuthState.isLoggedIn = false;
        });
        return logoutBtn;
      })()
    );

    return this.element;
  }
}
