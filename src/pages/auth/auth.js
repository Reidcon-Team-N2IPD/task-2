import { Signup } from "./signup/signup";

export class AuthPage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className =
      "flex flex-row justify-center items-center h-[calc(100vh-5rem)]";
    this.element.insertAdjacentElement("afterbegin", new Signup());

    return this.element;
  }
}
