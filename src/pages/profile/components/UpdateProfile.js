import "./UpdateProfile.css";
import { updateProfile } from "../../../services/api";

export class UpdateProfile {
  constructor() {
    this.element = document.createElement("div");
    this.element.className = "update-profile-dialog-wrapper hidden";

    const dialog = document.createElement("div");
    dialog.className = "update-profile-dialog";

    const updateProfileForm = document.createElement("form");
    updateProfileForm.className = "update-profile-form";

    updateProfileForm.innerHTML = String.raw`
      <input type="text" id="update-username"    required  autocomplete="false" name="update-username" class="input" placeholder="Username">
      <input type="text" id="update-fullname"  required   autocomplete="false"  name="update-fullname" class="input" placeholder="Full Name">
      <input type="text" id="update-address"   required  autocomplete="false" name="update-address" class="input" placeholder="Address">
      <label for="update-birthday"   required  class="text-lg mt-4">Birthday</label>
      <input type="date" required id="update-birthday" autocomplete="false" name="update-birthday" class="mt-4 h-15 border-dark-100 p-3 text-xl border">
    `;

    const closeButton = document.createElement("button");
    closeButton.innerHTML = String.raw`&times;`;
    closeButton.className = "update-profile-dialog-close-btn";
    closeButton.addEventListener("click", UpdateProfile.toggleDialog);

    dialog.appendChild(closeButton);

    dialog.appendChild(
      (function () {
        const h3 = document.createElement("h1");
        h3.className = "update-profile-dialog-heading";
        h3.textContent = "Update your profile";
        return h3;
      })()
    );

    updateProfileForm.addEventListener("submit", this.handleSubmit);
    updateProfileForm.appendChild(
      (function () {
        const updateBtn = document.createElement("button");
        updateBtn.className = "update-profile-form-submit-btn";
        updateBtn.textContent = "Update";
        updateBtn.type = "submit";
        return updateBtn;
      })()
    );
    dialog.appendChild(updateProfileForm);
    this.element.appendChild(dialog);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const username = document.querySelector("#update-username");
    const fullname = document.querySelector("#update-fullname");
    const address = document.querySelector("#update-address");
    const birthday = document.querySelector("#update-birthday");
    try {
      await updateProfile({
        username: username.value,
        fullname: fullname.value,
        address: address.value,
        birthday: birthday.value,
      });
    } catch (error) {
    } finally {
      username.value = "";
      fullname.value = "";
      address.value = "";
      birthday.value = "";
    }
  }

  static toggleDialog() {
    const updateProfileDialogWrapper = document.querySelector(
      ".update-profile-dialog-wrapper"
    );

    const updateProfileDialog = document.querySelector(
      ".update-profile-dialog"
    );

    if (updateProfileDialogWrapper.classList.contains("hidden")) {
      document.body.style.overflow = "hidden";
      updateProfileDialogWrapper.classList.remove("hidden");
      updateProfileDialogWrapper.classList.add("flex");
      updateProfileDialog.classList.remove("animated-wrapper-close");
      updateProfileDialog.classList.add("animated-wrapper-open");
    } else {
      updateProfileDialog.classList.remove("animated-wrapper-open");
      updateProfileDialog.classList.add("animated-wrapper-close");
      setTimeout(() => {
        updateProfileDialogWrapper.classList.remove("flex");
        updateProfileDialogWrapper.classList.add("hidden");
      }, 200);
      document.body.style.overflow = "auto";
    }
  }
}
