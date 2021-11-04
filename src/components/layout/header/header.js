// import { NavigationLink } from "./components/navigation-link";

// export class Header {
//   constructor(routes) {
//     this.el = document.createElement("header");

//     this.el.className =
//       "flex flex-col md:flex-row justify-between items-center h-16 bg-dark-800 fixed top-0 left-0 w-[100vw]";

//     const p = document.createElement("p");

//     p.className = "text-3xl text-white ml-5";

//     p.innerHTML = "N<sup>2</sup>IPD";

//     const ul = document.createElement("ul");

//     ul.className = "flex flex-row h-16";

//     routes.forEach((route) => {
//       if (route.path !== "/auth") {
//         ul.appendChild(new NavigationLink(route));
//       }
//     });

//     this.el.appendChild(p);

//     this.el.appendChild(ul);

//     return this.el;
//   }
// }

export class Header {
  constructor() {
    this.element = document.createElement("header");
    this.element.id = "main-header";
    this.element.className =
      "flex flex-col md:flex-row justify-between items-center h-16 top-0 left-0 w-[100%]";
    const p = document.createElement("p");
    p.className = "text-5xl text-dark-400 ml-8 font-bold";
    p.innerHTML = "N<sup>2</sup>IPD";
    const ul = document.createElement("ul");
    ul.className = "flex flex-row h-16";
    ul.appendChild(
      (function () {
        const li = document.createElement("li");
        li.className =
          "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer";
        const link = document.createElement("a");
        link.className =
          "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:(text-red-500)";
        link.textContent = "Documentation";
        li.appendChild(link);
        return li;
      })()
    );
    ul.appendChild(
      (function () {
        const li = document.createElement("li");
        li.className =
          "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer login-link";
        const link = document.createElement("a");
        link.className =
          "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:(text-red-500)";
        link.textContent = "Members";
        li.appendChild(link);
        return li;
      })()
    );
    ul.appendChild(
      (function () {
        const li = document.createElement("li");
        li.className =
          "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer signup-link";
        const link = document.createElement("a");
        link.className =
          "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:(text-red-500)";
        link.textContent = "Profile";
        li.appendChild(link);
        return li;
      })()
    );
    ul.appendChild(
      (function () {
        const li = document.createElement("li");
        li.className =
          "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer signup-link";
        const link = document.createElement("a");
        link.className =
          "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:(text-red-500)";
        link.textContent = "Logout";
        li.appendChild(link);
        return li;
      })()
    );
    this.element.appendChild(p);
    this.element.appendChild(ul);
    return this.element;

  }
}
