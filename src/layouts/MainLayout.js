import { BaseLoader } from "../components/base/base-loader/BaseLoader";
import { BaseNotifier } from "../components/base/base-notifier/BaseNotifier";
import { Header } from "../components/layout/header/Header";

export default class MainLayout {
  constructor(routerView) {
    this.element = document.createElement("div");
    this.element.insertAdjacentElement("afterbegin", new Header());
    const loader = document.querySelector(".loader");
    const notifier = document.querySelector(".notifier");
    if (!loader) {
      document.body.appendChild(new BaseLoader());
    }
    if (!notifier) {
      document.body.appendChild(new BaseNotifier());
    }
    const page = new routerView();
    this.element.appendChild(page.render());
    return this.element;
  }
}
