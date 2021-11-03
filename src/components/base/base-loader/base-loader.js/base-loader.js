import "./base-loader.css";
import { router } from "../../../../router/router";

export class BaseLoader {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "h-10 w-10 bg-dark-500";
    return this.el;
  }
}
