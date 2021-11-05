import "./SignupPage.css";
import { createProfile } from "../../../services/api";
export default class SignupPage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className = "signup-main";
    const form = document.createElement("form");
    form.className = "signup-form";

    form.innerHTML = String.raw`
      <div class="input-group">
        <input type="email" id="signup-email"   required   autocomplete="off"  name="signup-email" class="input" placeholder="Email">
        <label class="input-label" for="signup-email">EMAIL</label>
      </div>

      <div class="input-group">
        <input type="password" id="signup-password"  required   autocomplete="off"  name="signup-password" class="input" placeholder="Password">
        <label class="input-label" for="signup-password">PASSWORD</label>
      </div>

      <div class="input-group">
        <input type="text" id="signup-username"    required  autocomplete="off" name="signup-username" class="input" placeholder="Username">
        <label class="input-label" for="signup-username">USER NAME</label>
      </div>

      <div class="input-group">
        <input type="text" id="signup-fullname"  required   autocomplete="off"  name="signup-fullname" class="input" placeholder="Full Name">
        <label class="input-label" for="signup-fullname">FULL NAME</label>
      </div>

      <div class="input-group">
        <input type="text" id="signup-address"   required  autocomplete="off" name="signup-address" class="input" placeholder="Address">
        <label class="input-label" for="signup-address">ADDRESS</label>
      </div>

      <div class="input-group">
        <input type="date" required id="signup-birthday" autocomplete="false" name="signup-birthday" class="input" placeholder="birthday">
        <label for="signup=-birthday"   required  class="input-label-birth">BIRTHDAY</label>
      </div>
    `;
    form.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "signup-header";
        h1.textContent = "CREATE PROFILE";
        return h1;
      })()
    );
    form.addEventListener("submit", this.handleSubmit);
    form.appendChild(
      (function () {
        const signupBtn = document.createElement("button");
        signupBtn.className = "signup-form-submit-btn";
        signupBtn.textContent = "SIGNUP";
        signupBtn.type = "submit";
        return signupBtn;
      })()
    );
    form.appendChild(
      (function () {
        const linkToLogin = document.createElement("a");
        linkToLogin.className = "change-to-login login-link";
        linkToLogin.textContent = "Already signed up? Log in here";
        return linkToLogin;
      })()
    );
    this.element.appendChild(form);
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
