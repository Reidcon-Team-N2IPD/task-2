import "./LoginPage.css";
import { login } from "../../../services/api";

export class LoginPage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className = "login-main";
    const el = document.createElement("form");
    el.className = "login-form";
    el.innerHTML = String.raw`
      <input type="email" id="login-email"   required   autocomplete="false"  name="login-email" class="input" placeholder="Email">
      <input type="password" id="login-password"  required   autocomplete="false"  name="login-password" class="input" placeholder="Password">
      `;
    el.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "login-header";
        h1.textContent = "Login";
        return h1;
      })()
    );
    el.addEventListener("submit", this.handleSubmit);
    el.appendChild(
      (function () {
        const loginBtn = document.createElement("button");
        loginBtn.className = "login-form-submit-btn";
        loginBtn.textContent = "Login";
        loginBtn.type = "submit";
        return loginBtn;
      })()
    );
    el.appendChild(
      (function () {
        const linkToSignup = document.createElement("a");
        linkToSignup.className = "change-to-signup signup-link";
        linkToSignup.textContent = "Don't have an account yet? Join NOW =>";

        return linkToSignup;
      })()
    );

    this.element.appendChild(el);
    return this.element;
  }

  async handleSubmit(e) {
    e.preventDefault();
    const email = document.querySelector("#login-email");
    const password = document.querySelector("#login-password");

    await login({
      email: email.value,
      password: password.value,
    });
  }
}
