import { AuthHeader } from "../components/layout/auth-header/AuthHeader";
import { BaseLoader } from "../components/base/base-loader/base-loader.js/base-loader";
// export class AuthLayout {
//   constructor(routerView) {
//     // this.element = document.createElement("div");
//     // this.element.insertAdjacentElement("afterbegin", new AuthHeader());
//     // this.element.appendChild(new routerView());
//     // return this.element;
//     const loader = document.querySelector(".loader");
//     if (!loader) {
//       document.body.appendChild(new BaseLoader());
//     }
//     return new routerView();
//   }
// }

export class AuthLayout {
  constructor(routerView) {
    this.element = document.createElement("div");
    this.element.insertAdjacentElement("afterbegin", new AuthHeader());
    const loader = document.querySelector(".loader");
    if (!loader) {
      document.body.appendChild(new BaseLoader());
    }
    this.element.appendChild(new routerView());
    return this.element;
  }
}
