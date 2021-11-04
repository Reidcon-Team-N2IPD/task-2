import { Header } from "../components/layout/header/header";

export class MainLayout {
  constructor(routerView, routes) {
    this.element = document.createElement("div");
    this.element.insertAdjacentElement("afterbegin", new Header(routes));
    this.element.appendChild(new routerView());
    return this.element;
  }
}
