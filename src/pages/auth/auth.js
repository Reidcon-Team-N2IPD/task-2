import imgSrc from "../../assets/landing.svg";

export class AuthPage {
  constructor() {
    this.element = document.createElement("div");
    this.element.appendChild(
      (function () {
        const authHeader = document.createElement("header");
        authHeader.id = "auth-header";
        authHeader.className =
          "flex flex-col md:flex-row justify-between items-center h-16 top-0 left-0 w-[100%]";
        const p = document.createElement("p");
        p.className = "text-5xl text-dark-400 ml-8 font-bold";
        p.innerHTML = "N<sup>2</sup>IPD";
        const ul = document.createElement("ul");
        ul.className = "flex flex-row h-16 mr-8";
        ul.appendChild(
          (function () {
            const li = document.createElement("li");
            li.className =
              "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer";
            const link = document.createElement("a");
            link.className =
              "cursor-pointer text-dark-400 text-[16px] h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:(text-[#27DEBF])";
            link.textContent = "Documentation";
            li.appendChild(link);
            return li;
          })()
        );
        ul.appendChild(
          (function () {
            const li = document.createElement("li");
            li.className =
              "h-[calc(100%)] mr-4 flex flex-1 justify-center items-center cursor-pointer login-link";
            const link = document.createElement("a");
            link.className =
              "cursor-pointer bg-dark-800 text-white text-[16px] w-[112px] rounded-[5px]  h-[60%] pl-5 pr-5  flex justify-center items-center transition-all";
            link.textContent = "Log In";
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
              "cursor-pointer bg-[#27DEBF] text-[16px] text-white w-[112px] h-[60%] rounded-[5px] pl-5 pr-5  flex justify-center items-center transition-all";
            link.textContent = "Sign Up";
            li.appendChild(link);
            return li;
          })()
        );
        authHeader.appendChild(p);
        authHeader.appendChild(ul);
        return authHeader;
      })()
    );
    this.element.appendChild(
      (function () {
        const main = document.createElement("main");
        main.id = "landing-auth";
        main.className = "flex flex-row justify-between items-center";
        main.style.overflow = "hidden";

        main.innerHTML = String.raw`
        <div class="h-[calc(100vh-4rem)] w-[38vw] flex flex-col justify-center items-center ml-[100px] text-justify " id="auth-btn-container">
            <h1 class="self-start text-5xl text-[#27DEBF] font-600 mb-4">
                MOCK API
            </h1>
            <h2 class="self-start text-[1.5rem] text-dark-900 mb-4 font-600">
                Latest Project By N<sup>2</sup>IPD
            </h2>
          <p class="text-[14px] leading-[21px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc, quam vestibulum dignissim. Id laoreet lorem faucibus adipiscing pellentesque accumsan, dui natoque. A mauris amet, egestas facilisi semper vel a nisi, nec. Fusce ac tincidunt odio non bibendum ac id. Vulputate ipsum odio leo risus cursus. 
        </p>
          <p class="text-[14px] leading-[21px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc, quam vestibulum dignissim. Id laoreet lorem faucibus adipiscing pellentesque accumsan, dui natoque. A mauris amet, egestas facilisi semper vel a nisi, nec. Fusce ac tincidunt odio non bibendum ac id. Vulputate ipsum odio leo risus cursus. 
        </p>
          <div class="py-4 w-[calc(100%-4rem)] flex flex-row justify-start items-center self-start">
            <button  style="font-family: 'Roboto', sans-serif"  class="text-[16px] font-bold text-white bg-dark-800 h-[50px] w-[200px] shadow-sm shadow-dark-500 hover:( bg-dark-600 shadow-2xl shadow-dark-800 ) active:( bg-dark-100 shadow-2xl shadow-dark-800 ) transition-all">
              Read Documentation
            </button>
            <button   style="font-family: 'Roboto', sans-serif"  class="signup-link text-[16px] font-bold text-dark-800 bg-bg-white  h-[50px] ml-2 w-[200px] shadow-sm
            border border-4 border-dark-800 shadow-dark-500 hover:( bg-dark-600 text-white shadow-2xl shadow-dark-800) active:(bg-dark-900 text-white shadow-2xl shadow-dark-800) transition-all">
              Join N<sup>2</sup>IPD
            </button>
          </div>
        </div>
        `;
        const imgContainer = document.createElement("div");
        imgContainer.className =
          "h-[calc(100vh-4rem)] w-[35vw] flex flex-col justify-center items-center mr-[100px]";
        const img = new Image();
        img.src = imgSrc;
        img.style.height = "100vh";
        imgContainer.appendChild(img);
        main.appendChild(imgContainer);

        // main.appendChild(new Login());
        // main.appendChild(new Signup());
        return main;
      })()
    );


    return this.element;
  }
}
