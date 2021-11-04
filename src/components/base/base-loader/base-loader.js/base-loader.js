import "./base-loader.css";
export class BaseLoader {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "loader";
    return this.el;
  }
  static show() {
    const loader = document.querySelector(".loader");
    loader.classList.add("show");
  }

  static hide() {
    const loader = document.querySelector(".loader");
    loader.classList.remove("show");
  }
}
