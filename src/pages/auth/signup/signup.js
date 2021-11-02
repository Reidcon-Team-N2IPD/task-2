export class Signup {
  constructor() {
    this.element = document.createElement("form");
    this.element.className =
      "flex flex-col justify-center items-center h-[500px]";
    this.element.innerHTML = String.raw`
    <div class="form-control flex flex-row justify-between items-center">
    <label for="signup-email">Email</label>
    <input type="text" id="signup-email" name="signup-email" class="h-8 border-dark-100 p-3 text-lg">
    </div>
     <div class="form-control  flex flex-row justify-between items-center">
    <label for="signup-password">Password</label>
    <input type="text" id="signup-password" name="signup-password" class="h-8 border-dark-100 p-3 text-lg">
    </div>    <div class="form-control  flex flex-row justify-between items-center">
    <label for="signup-username">Username</label>
    <input type="text" id="signup-username" name="signup-username" class="h-8 border-dark-100 p-3 text-lg">
    </div>
    `;
    this.element.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this.element.appendChild(
      (function () {
        const signup_btn = document.createElement("button");
        signup_btn.className = "text-xl text-dark-600";
        signup_btn.textContent = "Signup";
        return signup_btn;
      })()
    );

    return this.element;
  }
}
