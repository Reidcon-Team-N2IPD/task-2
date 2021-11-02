export class ProfilePage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className =
      "flex flex-row justify-center items-center min-h-[calc(100vh-4rem)] mt-16";
    this.element.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "text-5xl text-dark-600";
        h1.textContent = "Profile Page";
        return h1;
      })()
    );

    return this.element;
  }
}
