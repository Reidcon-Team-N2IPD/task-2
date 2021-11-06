import { AuthHeader } from "../components/layout/auth-header/AuthHeader";
import { BaseLoader } from "../components/base/base-loader/BaseLoader";
import { BaseNotifier } from "../components/base/base-notifier/BaseNotifier";
export default class AuthLayout {
  constructor(routerView) {
    this.element = document.createElement("div");
    this.element.insertAdjacentElement("afterbegin", new AuthHeader());
    const loader = document.querySelector(".loader");
    const notifier = document.querySelector(".notifier");
    if (!loader) {
      document.body.appendChild(new BaseLoader());
    }
    if (!notifier) {
      document.body.appendChild(new BaseNotifier());
    }
    this.element.appendChild(new routerView().render());
    return this.element;
  }
}
