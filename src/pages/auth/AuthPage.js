import "./Authpage.css";
import imgSrc from "../../assets/landing.svg";

export class AuthPage {
  constructor() {
    this.element = document.createElement("main");
    this.element.id = "landing-auth";
    this.element.className = "auth-main";
    this.element.style.overflow = "hidden";

    this.element.innerHTML = String.raw`
        <div class="auth-container" id="auth-btn-container">
            <h1 class="auth-heading">
                MOCK API
            </h1>
            <h2 class="auth-subheading">
                Latest Project By N<sup>2</sup>IPD
            </h2>
          <p class="auth-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc, quam vestibulum dignissim. Id laoreet lorem faucibus adipiscing pellentesque accumsan, dui natoque. A mauris amet, egestas facilisi semper vel a nisi, nec. Fusce ac tincidunt odio non bibendum ac id. Vulputate ipsum odio leo risus cursus. 
        </p>
          <p class="auth-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc, quam vestibulum dignissim. Id laoreet lorem faucibus adipiscing pellentesque accumsan, dui natoque. A mauris amet, egestas facilisi semper vel a nisi, nec. Fusce ac tincidunt odio non bibendum ac id. Vulputate ipsum odio leo risus cursus. 
        </p>
          <div class="auth-btn-group">
            <button class="auth-docs-btn">
              Read Documentation
            </button>
            <button class="auth-signup-btn signup-link">
              Join N<sup>2</sup>IPD
            </button>
          </div>
        </div>
        `;
    const imgContainer = document.createElement("div");
    imgContainer.className = "auth-img-container";
    const img = new Image();
    img.src = imgSrc;
    img.className = "auth-img";
    img.alt = "Landing Page Image";
    imgContainer.appendChild(img);
    this.element.appendChild(imgContainer);

    return this.element;
  }
}