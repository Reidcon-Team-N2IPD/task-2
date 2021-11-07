import { deleteProfile } from "../../../services/api";
import "./DeleteProfileDialog.css";
// import {  } from "../../../services/api";

export class DeleteProfile {
  constructor() {
    this.element = document.createElement("div");
    this.element.className = "delete-profile-dialog-wrapper hidden";

    const dialog = document.createElement("div");
    dialog.className = "delete-profile-dialog";

    const deleteProfileContainer = document.createElement("div");
    deleteProfileContainer.className = "delete-profile-container";

    const deleteDescription = document.createElement("p");
    deleteDescription.className = "delete-description";
    deleteDescription.innerHTML =
      "You will lose all your data if you delete your account. You will be logged out on deletion.";
    const confirmation = document.createElement("div");
    confirmation.className = "delete-confirmation";
    const confirm = document.createElement("button");
    confirm.className = "confirm";
    confirm.innerHTML = "&check;";
    confirm.addEventListener("click", async () => {
      await deleteProfile();
    });
    const cancel = document.createElement("button");
    cancel.className = "cancel";
    cancel.innerHTML = "&times;";
    cancel.addEventListener("click", () => {
      DeleteProfile.toggleDialog();
    });
    confirmation.appendChild(confirm);
    confirmation.appendChild(cancel);
    deleteProfileContainer.appendChild(deleteDescription);
    deleteProfileContainer.appendChild(confirmation);

    const closeButton = document.createElement("button");
    closeButton.innerHTML = String.raw`&times;`;
    closeButton.className = "delete-profile-dialog-close-btn";
    closeButton.addEventListener("click", DeleteProfile.toggleDialog);

    dialog.appendChild(closeButton);

    dialog.appendChild(
      (function () {
        const h3 = document.createElement("h1");
        h3.className = "delete-profile-dialog-heading";
        h3.textContent = "Are you sure?";
        return h3;
      })()
    );
    dialog.appendChild(deleteProfileContainer);
    this.element.appendChild(dialog);
  }

  static toggleDialog() {
    const deleteProfileDialogWrapper = document.querySelector(
      ".delete-profile-dialog-wrapper"
    );

    const deleteProfileDialog = document.querySelector(
      ".delete-profile-dialog"
    );

    if (deleteProfileDialogWrapper.classList.contains("hidden")) {
      document.body.style.overflow = "hidden";
      deleteProfileDialogWrapper.classList.remove("hidden");
      deleteProfileDialogWrapper.classList.add("flex");
      deleteProfileDialog.classList.remove("animated-wrapper-close");
      deleteProfileDialog.classList.add("animated-wrapper-open");
    } else {
      deleteProfileDialog.classList.remove("animated-wrapper-open");
      deleteProfileDialog.classList.add("animated-wrapper-close");
      setTimeout(() => {
        deleteProfileDialogWrapper.classList.remove("flex");
        deleteProfileDialogWrapper.classList.add("hidden");
      }, 200);
      document.body.style.overflow = "auto";
    }
  }
}
