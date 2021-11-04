import { UpdateProfile } from "./components/UpdateProfile";
export class ProfilePage {
  constructor() {
    this.element = document.createElement("main");
    const dialogWrapper = new UpdateProfile();
    this.element.className =
      "flex flex-col justify-center items-center min-h-[calc(100vh-4rem)]";
    this.element.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "text-5xl text-dark-600";
        h1.textContent = "Profile Page";
        return h1;
      })()
    );

    const openUpdateDialogBtn = document.createElement("button");
    openUpdateDialogBtn.textContent = "Update Profile";
    openUpdateDialogBtn.className = "bg-dark-800 text-white text-xl py-4 px-8";
    this.element.appendChild(openUpdateDialogBtn);
    this.element.appendChild(dialogWrapper.element);
    openUpdateDialogBtn.addEventListener("click", UpdateProfile.toggleDialog);
    return this.element;
  }
}
