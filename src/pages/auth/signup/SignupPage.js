import "./SignupPage.css";
import { createProfile } from "../../../services/api";
export default class SignupPage {
  render() {
    const template = document.createElement("main");
    template.className = "signup-main";
    const form = document.createElement("form");
    form.className = "signup-form";

    const signUpForm = [
      {
        type: "email",
        id: "signup-email",
        placeholder: "Email",
        labelClass: "input-label",
      },
      {
        type: "password",
        id: "signup-password",
        placeholder: "Password",
        labelClass: "input-label",
      },
      {
        type: "text",
        id: "signup-username",
        placeholder: "User Name",
        labelClass: "input-label",
      },
      {
        type: "text",
        id: "signup-fullname",
        placeholder: "Full Name",
        labelClass: "input-label",
      },
      {
        type: "text",
        id: "signup-address",
        placeholder: "Address",
        labelClass: "input-label",
      },
      {
        type: "date",
        id: "signup-birthday",
        placeholder: "Birthday",
        labelClass: "input-label-birth",
      },
    ];

    form.innerHTML = signUpForm
      .map(
        (item) =>
          String.raw`
      <div class="input-group">
        <input type="${item.type}" id="${
            item.id
          }"   required   autocomplete="off"  name="${
            item.id
          }" class="input" placeholder="${item.placeholder}">
        <label class="${item.labelClass}" for="${
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
    template.appendChild(form);
    return template;
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
