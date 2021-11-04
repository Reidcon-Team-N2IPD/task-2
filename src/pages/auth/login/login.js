import { AuthHeader } from "../../../components/auth-header/auth-header";
import { login } from "../../../services/api";

export class LoginPage {
  constructor() {
    this.element = document.createElement("div");
    this.element.appendChild(new AuthHeader());
    const main = document.createElement("main");
    main.className = "flex flex-col justify-center items-center";
    const el = document.createElement("form");
    el.className =
      "login-form flex flex-col justify-evenly items-center w-[calc(50vw)] transition-all h-screen";
    el.innerHTML = String.raw`
      <input type="email" id="login-email"   required   autocomplete="false"  name="login-email" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Email">
      <input type="password" id="login-password"  required   autocomplete="false"  name="login-password" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Password">
      `;
    el.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "text-5xl text-dark-600 mt-16";
        h1.textContent = "Login";
        return h1;
      })()
    );
    el.addEventListener("submit", this.handleSubmit);
    el.appendChild(
      (function () {
        const loginBtn = document.createElement("button");
        loginBtn.className =
          "text-2xl text-white bg-dark-800 my-8 py-4 px-20 rounded-full shadow-sm shadow-dark-500 hover:(transform bg-dark-600 shadow-2xl shadow-dark-800 -translate-y-2) active:(transform bg-dark-100 shadow-2xl shadow-dark-800 -translate-y-1) transition-all";
        loginBtn.textContent = "Login";
        loginBtn.type = "submit";
        return loginBtn;
      })()
    );
    el.appendChild(
      (function () {
        const linkToSignup = document.createElement("a");
        linkToSignup.className =
          "text-xl text-blue-800 my-4 cursor-pointer  transition-all  hover:(underline) signup-link";
        linkToSignup.textContent =
          "Don't have an account yet? Create one now =>";

        return linkToSignup;
      })()
    );

    main.appendChild(el);
    this.element.appendChild(main);
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
