import "./NotFoundPage.css";
import imgSrc from "../../assets/Error.svg";
import { router } from "../../router/router";

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

    const errorMsgContainer = document.createElement("div");
    errorMsgContainer.className = "not-found-error-msg-container";
    const errorMsg = document.createElement("h1");
    errorMsg.className = "not-found-error-msg";
    errorMsg.innerText = "Oops! You seem to be lost";
    errorMsgContainer.appendChild(errorMsg);
    const backToHomeLink = document.createElement("a");
    backToHomeLink.className = "not-found-error-link";
    backToHomeLink.innerText = "Go back to home";
    backToHomeLink.addEventListener("click", () => {
      router.currentPath = "/";
    });
    errorMsgContainer.appendChild(backToHomeLink);

    template.appendChild(errorMsgContainer);
    return template;
  }
}
