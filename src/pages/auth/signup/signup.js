
import { AuthHeader } from "../../../components/auth-header/auth-header";
import { createProfile } from "../../../services/api";
export class SignupPage {
  constructor() {
    this.element = document.createElement("div");
    this.element.appendChild(new AuthHeader());
    const main = document.createElement("main");
    main.className = "flex flex-col justify-center items-center";

    const el = document.createElement("form");
    el.className =
      "signup-form flex flex-col justify-evenly items-center w-[calc(50vw)] transition-all h-screen";

      <input type="email" id="signup-email"   required   autocomplete="false"  name="signup-email" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Email">
      <input type="password" id="signup-password"  required   autocomplete="false"  name="signup-password" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Password">
      <input type="text" id="signup-username"    required  autocomplete="false" name="signup-username" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Username">
        <input type="text" id="signup-fullname"  required   autocomplete="false"  name="signup-fullname" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Full Name">
      <input type="text" id="signup-address"   required  autocomplete="false" name="signup-address" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Address">
      <label for="signup=-birthday"   required  class="text-lg mt-4">Birthday</label>
      <input type="date" id="signup-birthday" autocomplete="false" name="signup-birthday" class="mt-4 h-15 border-dark-100 p-3 text-xl border">
    `;
    el.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "text-5xl text-dark-600 mt-4";
        h1.textContent = "Create Profile";
        return h1;
      })()
    );
    el.addEventListener("submit", this.handleSubmit);
    el.appendChild(
      (function () {
        const signupBtn = document.createElement("button");
        signupBtn.className =
          "text-2xl text-white bg-dark-800 my-8 py-4 px-20 rounded-full shadow-sm shadow-dark-500 hover:(transform bg-dark-600 shadow-2xl shadow-dark-800 -translate-y-2) active:(transform bg-dark-100 shadow-2xl shadow-dark-800 -translate-y-1) transition-all";
        signupBtn.textContent = "Signup";
        signupBtn.type = "submit";
        return signupBtn;
      })()
    );
    el.appendChild(
      (function () {
        const linkToLogin = document.createElement("a");
        linkToLogin.className =
          "text-xl text-blue-800 my-4 cursor-pointer  transition-all  hover:(underline) login-link";
        linkToLogin.textContent = "Already signed up? Log in here =>";
        return linkToLogin;
      })()
    );
    main.appendChild(el);
    this.element.appendChild(main);

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
