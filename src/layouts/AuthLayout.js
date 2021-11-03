export class AuthLayout {
  constructor(routerView) {
    this.element = document.createElement("div");
    this.element.appendChild(new routerView());
    return this.element;
  }
}
