import "./LoginPage.css";
import { login } from "../../../services/api";

export default class LoginPage {
  render() {
    const template = document.createElement("main");
    template.className = "login-main";
    const form = document.createElement("form");
    form.className = "login-form";
    
    const loginForm = [
      { type: "email", id: "login-email", placeholder: "Email" },
      { type: "password", id: "login-password", placeholder: "Password" },
    ];

    form.innerHTML = loginForm
      .map(
        (item) =>
          String.raw`
        <div class="input-group">
          <input type="${item.type}" id="${
            item.id
          }"   required   autocomplete="off"  name="${
            item.id
          }" class="input" placeholder="${item.placeholder}">
          <label class="input-label" for="${
            item.id
          }">${item.placeholder.toUpperCase()}</label>
        </div>
      `
      )
      .join("");

    form.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "login-header";
        h1.textContent = "LOGIN";
        return h1;
      })()
    );
    form.addEventListener("submit", this.handleSubmit);
    form.appendChild(
      (function () {
        const loginBtn = document.createElement("button");
        loginBtn.className = "login-form-submit-btn";
        loginBtn.textContent = "LOGIN";
        loginBtn.type = "submit";
        return loginBtn;
      })()
    );
    form.appendChild(
      (function () {
        const linkToSignup = document.createElement("a");
        linkToSignup.className = "change-to-signup signup-link";
        linkToSignup.textContent = "Don't have an account yet? Join here";

        return linkToSignup;
      })()
    );
    
    template.appendChild(form);
    return template;
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
