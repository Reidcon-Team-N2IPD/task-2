import "./SignupPage.css";
import { createProfile } from "../../../services/api";
export default class SignupPage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className = "signup-main";

    const el = document.createElement("form");
    el.className = "signup-form";

    el.innerHTML = String.raw`
   <input type="email" id="signup-email"   required   autocomplete="false"  name="signup-email" class="input" placeholder="Email">
      <input type="password" id="signup-password"  required   autocomplete="false"  name="signup-password" class="input" placeholder="Password">
      <input type="text" id="signup-username"    required  autocomplete="false" name="signup-username" class="input" placeholder="Username">
        <input type="text" id="signup-fullname"  required   autocomplete="false"  name="signup-fullname" class="input" placeholder="Full Name">
      <input type="text" id="signup-address"   required  autocomplete="false" name="signup-address" class="input" placeholder="Address">
      <label for="signup=-birthday"   required  class="text-lg mt-4">Birthday</label>
      <input type="date" required id="signup-birthday" autocomplete="false" name="signup-birthday" class="mt-4 h-15 border-dark-100 p-3 text-xl border">
    `;
    el.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "signup-header";
        h1.textContent = "Create Profile";
        return h1;
      })()
    );
    el.addEventListener("submit", this.handleSubmit);
    el.appendChild(
      (function () {
        const signupBtn = document.createElement("button");
        signupBtn.className = "signup-form-submit-btn";
        signupBtn.textContent = "Signup";
        signupBtn.type = "submit";
        return signupBtn;
      })()
    );
    el.appendChild(
      (function () {
        const linkToLogin = document.createElement("a");
        linkToLogin.className = "change-to-login login-link";
        linkToLogin.textContent = "Already signed up? Log in here =>";
        return linkToLogin;
      })()
    );
    this.element.appendChild(el);
    return this.element;
  }

  async handleSubmit(e) {
    e.preventDefault();
    const email = document.querySelector("#signup-email");
    const password = document.querySelector("#signup-password");
    const username = document.querySelector("#signup-username");
    const fullname = document.querySelector("#signup-fullname");
    const address = document.querySelector("#signup-address");
    const birthday = document.querySelector("#signup-birthday");

    await createProfile({
      email: email.value,
      password: password.value,
      username: username.value,
      fullname: fullname.value,
      address: address.value,
      birthday: birthday.value,
    });
  }
}
