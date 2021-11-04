import { AuthHeader } from "../components/auth-header/auth-header";
export class AuthLayout {
  constructor(routerView) {
    // this.element = document.createElement("div");
    // this.element.insertAdjacentElement("afterbegin", new AuthHeader());
    // this.element.appendChild(new routerView());
    // return this.element;
    return new routerView();
  }
}
