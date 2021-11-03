import { createProfile } from "../../../services/api";
import { BaseLoader } from "../../../components/base/base-loader/base-loader.js/base-loader";

export class Signup {
  constructor() {
    this.element = document.createElement("form");
    this.element.className =
      "flex flex-col justify-evenly items-center min-h-[calc(100vh-200px)] w-[calc(50vw)]";
    this.element.innerHTML = String.raw`
      <input type="email" id="signup-email"   required   autocomplete="false"  name="signup-email" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Email">
      <input type="password" id="signup-password"  required   autocomplete="false"  name="signup-password" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Password">
      <input type="text" id="signup-username"    required  autocomplete="false" name="signup-username" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Username">
        <input type="text" id="signup-fullname"  required   autocomplete="false"  name="signup-fullname" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Full Name">
      <input type="text" id="signup-address"   required  autocomplete="false" name="signup-address" class="mt-4 w-[100%] h-15 border-dark-100 p-3 text-xl border rounded-full" placeholder="Address">
      <label for="signup=-birthday"   required  class="text-lg mt-4">Birthday</label>
      <input type="date" id="signup-birthday" autocomplete="false" name="signup-birthday" class="mt-4 h-15 border-dark-100 p-3 text-xl border">
    `;
    this.element.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "text-5xl text-dark-600 mt-16";
        h1.textContent = "Create Profile";
        return h1;
      })()
    );
    this.element.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.querySelector("#signup-email");
      const password = document.querySelector("#signup-password");
      const username = document.querySelector("#signup-username");
      const fullname = document.querySelector("#signup-fullname");
      const address = document.querySelector("#signup-address");
      const birthday = document.querySelector("#signup-birthday");

      console.log(
        email.value,
        password.value,
        username.value,
        fullname.value,
        address.value,
        birthday.value
      );
      await createProfile({
        email: email.value,
        password: password.value,
        username: username.value,
        fullname: fullname.value,
        address: address.value,
        birthday: birthday.value,
      });
    });
    this.element.appendChild(
      (function () {
        const signup_btn = document.createElement("button");
        signup_btn.className =
          "text-2xl text-white bg-dark-800 my-8 py-4 px-20 rounded-full shadow-sm shadow-dark-500 hover:(transform bg-dark-600 shadow-2xl shadow-dark-800 -translate-y-2) active:(transform bg-dark-100 shadow-2xl shadow-dark-800 -translate-y-1) transition-all";
        signup_btn.textContent = "Signup";
        signup_btn.type = "submit";
        return signup_btn;
      })()
    );
    this.element.appendChild(new BaseLoader());

    return this.element;
  }
}
