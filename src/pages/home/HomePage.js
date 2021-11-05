import "./HomePage.css";
import imgSrc from "../../assets/frameworks.svg";

export default class HomePage {
  constructor() {
    this.element = document.createElement("main");
    this.element.id = "landing-home";
    this.element.className = "home-main";
    this.element.style.overflow = "hidden";

    this.element.innerHTML = String.raw`
        <div class="home-container" id="home-btn-container">
            <h1 class="home-heading">
                MOCK API
            </h1>
            <h2 class="home-subheading">
                Latest Project By N<sup>2</sup>IPD
            </h2>
          <p class="home-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc, quam vestibulum dignissim. Id laoreet lorem faucibus adipiscing pellentesque accumsan, dui natoque. A mauris amet, egestas facilisi semper vel a nisi, nec. Fusce ac tincidunt odio non bibendum ac id. Vulputate ipsum odio leo risus cursus. 
        </p>
          <p class="home-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc, quam vestibulum dignissim. Id laoreet lorem faucibus adipiscing pellentesque accumsan, dui natoque. A mauris amet, egestas facilisi semper vel a nisi, nec. Fusce ac tincidunt odio non bibendum ac id. Vulputate ipsum odio leo risus cursus. 
        </p>
          <div class="home-btn-group">
            <button class="home-docs-btn">
              Read Documentation
            </button>
          </div>
        </div>
        `;
    const imgContainer = document.createElement("div");
    imgContainer.className = "home-img-container";
    const img = new Image();
    img.src = imgSrc;
    img.className = "home-img";
    img.alt = "Landing Page Image";
    imgContainer.appendChild(img);
    this.element.appendChild(imgContainer);

    return this.element;
  }
}
