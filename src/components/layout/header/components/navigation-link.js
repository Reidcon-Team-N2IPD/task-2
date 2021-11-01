import "./navigation-link.css";

export class NavigationLink {
  constructor(route) {
    const path = route.path;

    this.el = String.raw`
    <li class="h-[calc(100%)] flex flex-1 justify-center items-center">
      <a href="/#${path}" class="text-white text-xl nav-list--link h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:(bg-dark-50)">
      ${route.name}
      </a>
    </li>
    `;
  }
}
