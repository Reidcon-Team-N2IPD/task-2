import "./NotFoundPage.css";
import imgSrc from "../../assets/frameworks.svg";

export default class NotFoundPage {
  constructor() {
    this.element = document.createElement("main");
    this.element.id = "landing-not-found";
    this.element.className = "not-found-main";
    this.element.style.overflow = "hidden";

    const imgContainer = document.createElement("div");
    imgContainer.className = "not-found-img-container";
    const img = new Image();
    img.src = imgSrc;
    img.className = "not-found-img";
    img.alt = "Landing Page Image";
    imgContainer.appendChild(img);
    this.element.appendChild(imgContainer);

    return this.element;
  }
}
