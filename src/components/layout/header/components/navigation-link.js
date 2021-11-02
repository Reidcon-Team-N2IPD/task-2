import "./navigation-link.css";
import { routerProxy } from "../../../../router/router";

export class NavigationLink {
  constructor(route) {
    const path = route.path;
    this.el = document.createElement("li");
    this.el.className =
      "h-[calc(100%)] flex flex-1 justify-center items-center";
    const link = document.createElement("a");
    link.className =
      "text-white text-xl nav-list--link h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:(bg-dark-50)";
    link.textContent = route.name;
    this.el.appendChild(link);
    link.addEventListener("click", () => {
      history.pushState(null, null, path);
      routerProxy.currentPath = path;
    });
    return this.el;
  }
}
