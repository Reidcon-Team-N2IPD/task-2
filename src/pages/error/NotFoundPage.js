import "./NotFoundPage.css";
import imgSrc from "../../assets/Error.svg";

export default class NotFoundPage {
  render() {
    const template = document.createElement("main");
    template.id = "landing-not-found";
    template.className = "not-found-main";
    template.style.overflow = "hidden";

    const imgContainer = document.createElement("div");
    imgContainer.className = "not-found-img-container";
    const img = new Image();
    img.src = imgSrc;
    img.className = "not-found-img";
    img.alt = "Landing Page Image";
    imgContainer.appendChild(img);
    template.appendChild(imgContainer);

    return template;
  }
}
