import { BaseLoader } from "../components/base/base-loader/base-loader.js/base-loader";
import { Header } from "../components/layout/header/Header";

export default class MainLayout {
  constructor(routerView) {
    this.element = document.createElement("div");
    this.element.insertAdjacentElement("afterbegin", new Header());
    const loader = document.querySelector(".loader");
    if (!loader) {
      document.body.appendChild(new BaseLoader());
    }
    this.element.appendChild(new routerView());
    return this.element;
  }
}
