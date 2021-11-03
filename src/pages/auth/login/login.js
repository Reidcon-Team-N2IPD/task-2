import { login } from "../../../services/api";

export class Login {
  constructor() {
    this.element = document.createElement("form");
    this.element.className = "hiddenFromView login-form";
    this.element.innerHTML = String.raw`
      <input type="email" id="login-email"   required   autocomplete="false"  name="login-email" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Email">
      <input type="password" id="login-password"  required   autocomplete="false"  name="login-password" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Password">
      `;
    this.element.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "text-5xl text-dark-600 mt-16";
        h1.textContent = "Login";
        return h1;
      })()
    );
    this.element.addEventListener("submit", this.handleSubmit);
    this.element.appendChild(
      (function () {
        const loginBtn = document.createElement("button");
        loginBtn.className =
          "text-2xl text-white bg-dark-800 my-8 py-4 px-20 rounded-full shadow-sm shadow-dark-500 hover:(transform bg-dark-600 shadow-2xl shadow-dark-800 -translate-y-2) active:(transform bg-dark-100 shadow-2xl shadow-dark-800 -translate-y-1) transition-all";
        loginBtn.textContent = "Login";
        loginBtn.type = "submit";
        return loginBtn;
      })()
    );
    this.element.appendChild(
      (function () {
        const linkToSignup = document.createElement("a");
        linkToSignup.className =
          "text-xl text-blue-800 my-4 cursor-pointer  transition-all  hover:(underline)";
        linkToSignup.textContent =
          "Don't have an account yet? Create one now =>";
        linkToSignup.addEventListener("click", (e) => {
          e.preventDefault();
          const signupForm = document.querySelector(".signup-form");
          const loginForm = document.querySelector(".login-form");
          loginForm.classList.remove("visibleFromView");
          loginForm.classList.add("hiddenFromView");
          signupForm.classList.remove("hiddenFromView");
          signupForm.classList.add("visibleFromView");
        });
        return linkToSignup;
      })()
    );

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
