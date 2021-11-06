export default class ErrorLayout {
  constructor(routerView) {
    this.element = document.createElement("div");
    this.element.appendChild(new routerView().render());
    return this.element;
  }
}
