import "./BaseNotifier.css";
export class BaseNotifier {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "notifier";
    return this.el;
  }
  static notify(options) {
    const notifier = document.querySelector(".notifier");
    notifier.textContent = options.message;
    notifier.classList.add(`show-notifier-${options.type}`);
    setTimeout(() => {
      notifier.textContent = "";
      notifier.classList.remove(`show-notifier-${options.type}`);
    }, options.duration);
  }
}
