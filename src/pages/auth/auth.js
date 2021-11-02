import { Signup } from "./signup/signup";

export class AuthPage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className =
      "flex flex-row justify-center items-center min-h-[calc(100vh-4rem)] mt-16";
    this.element.insertAdjacentElement("afterbegin", new Signup());

    return this.element;
  }
}
