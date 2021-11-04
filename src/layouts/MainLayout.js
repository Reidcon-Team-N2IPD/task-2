import { BaseLoader } from "../components/base/base-loader/base-loader.js/base-loader";
import { Header } from "../components/layout/header/Header";

export class MainLayout {
  constructor(routerView, routes) {
    this.element = document.createElement("div");
    this.element.insertAdjacentElement("afterbegin", new Header(routes));
    document.body.appendChild(new BaseLoader());
    this.element.appendChild(new routerView());
    return this.element;
  }
}
