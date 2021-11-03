import { NavigationLink } from "./components/navigation-link";

export class Header {
  constructor(routes) {
    this.el = document.createElement("header");
    this.el.className =
      "flex flex-col md:flex-row justify-between items-center h-16 bg-dark-800 fixed top-0 left-0 w-[100vw]";
    const p = document.createElement("p");
    p.className = "text-3xl text-white ml-5";
    p.innerHTML = "N<sup>2</sup>IPD";
    const ul = document.createElement("ul");
    ul.className = "flex flex-row h-16";
    routes.forEach((route) => {
      if (route.path !== "/auth") {
        ul.appendChild(new NavigationLink(route));
      }
    });
    this.el.appendChild(p);
    this.el.appendChild(ul);
    return this.el;
  }
}
