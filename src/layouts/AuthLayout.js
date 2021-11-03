export class AuthLayout {
  constructor(routerView) {
    this.element = document.createElement("div");
    this.element.appendChild(
      (function () {
        const authHeader = document.createElement("header");
        authHeader.id = "auth-header";
        authHeader.className =
          "flex flex-col md:flex-row justify-between items-center h-16 fixed top-0 left-0 w-[100vw]";
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
              "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer";
            const link = document.createElement("a");
            link.className =
              "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:(text-red-500)";
            link.textContent = "Login";
            li.appendChild(link);
            return li;
          })()
        );
        ul.appendChild(
          (function () {
            const li = document.createElement("li");
            li.className =
              "h-[calc(100%)] flex flex-1 justify-center items-center cursor-pointer";
            const link = document.createElement("a");
            link.className =
              "cursor-pointer text-dark-400 text-xl h-[100%] w-[100%] pl-5 pr-5  flex justify-center items-center transition-all hover:(text-red-500)";
            link.textContent = "Signup";
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
        main.className =
          "flex flex-row justify-start items-center min-h-[100vh] mt-16";

        main.innerHTML = String.raw`
        <div class="h-[50vh] w-[30vw]" id="auth-btn-container">
          <button id="documentation-link" class="text-2xl text-white bg-dark-800 mt-8 mx-8 py-4 w-[calc(100%-4rem)] shadow-sm shadow-dark-500 hover:(transform bg-dark-600 shadow-2xl shadow-dark-800 -translate-y-2) active:(transform bg-dark-100 shadow-2xl shadow-dark-800 -translate-y-1) transition-all">
            Read Documentation
          </button>
          <div class="mx-8 py-4 w-[calc(100%-4rem)] flex flex-row justify-between items-center">
            <button id="login-link" class="text-2xl text-white bg-dark-800 py-4 mr-2 w-[calc(100%)] shadow-sm shadow-dark-500 hover:(transform bg-dark-600 shadow-2xl shadow-dark-800 -translate-y-2) active:(transform bg-dark-100 shadow-2xl shadow-dark-800 -translate-y-1) transition-all">
              Login
            </button>
            <button id="signup-link" class="text-2xl text-white bg-dark-800 py-4 ml-2 w-[calc(100%)] shadow-sm shadow-dark-500 hover:(transform bg-dark-600 shadow-2xl shadow-dark-800 -translate-y-2) active:(transform bg-dark-100 shadow-2xl shadow-dark-800 -translate-y-1) transition-all">
              Signup
            </button>
          </div>
        </div>
        `;
        return main;
      })()
    );

    this.element.appendChild(new routerView());
    return this.element;
  }
}
