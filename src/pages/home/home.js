export class HomePage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className =
      "flex flex-row justify-center items-center h-[calc(100vh-5rem)]";
    this.element.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "text-5xl text-dark-600";
        h1.textContent = "Home Page";
        return h1;
      })()
    );

    return this.element;
  }
}
