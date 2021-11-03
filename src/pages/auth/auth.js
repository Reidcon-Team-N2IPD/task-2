import "./auth.css";
import { Signup } from "./signup/signup";
import { Login } from "./login/login";

export class AuthPage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className =
      "flex flex-row justify-center items-center min-h-[calc(100vh-4rem)] mt-4";
    this.element.appendChild(new Signup());
    this.element.appendChild(new Login());

    return this.element;
  }
}
