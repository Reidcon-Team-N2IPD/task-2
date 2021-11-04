import "./UpdateProfile.css";
import { updateProfile } from "../../../services/api";

export class UpdateProfile {
  constructor() {
    this.element = document.createElement("div");
    this.element.className = "update-profile-dialog-wrapper hidden";

    const dialog = document.createElement("div");
    dialog.className =
      "update-profile-dialog flex flex-col justify-center items-center";

    const updateProfileForm = document.createElement("form");
    updateProfileForm.className =
      "update-form flex flex-col justify-evenly items-center w-[90%] transition-all h-[100%] mt-16";

    updateProfileForm.innerHTML = String.raw`
      <input type="text" id="update-username"    required  autocomplete="false" name="update-username" class="update-profile-input" placeholder="Username">
      <input type="text" id="update-fullname"  required   autocomplete="false"  name="update-fullname" class="update-profile-input" placeholder="Full Name">
      <input type="text" id="update-address"   required  autocomplete="false" name="update-address" class="update-profile-input" placeholder="Address">
      <label for="update-birthday"   required  class="text-lg mt-4">Birthday</label>
      <input type="date" id="update-birthday" autocomplete="false" name="update-birthday" class="mt-4 h-15 border-dark-100 p-3 text-xl border">
    `;

    const closeButton = document.createElement("button");
    closeButton.innerHTML = String.raw`&times;`;
    closeButton.className =
      "text-3xl font-bold absolute top-[10px] right-[20px]";
    closeButton.addEventListener("click", UpdateProfile.toggleDialog);

    dialog.appendChild(closeButton);

    dialog.appendChild(
      (function () {
        const h3 = document.createElement("h1");
        h3.className = "text-3xl text-dark-600 mt-4";
        h3.textContent = "Update your profile";
        return h3;
      })()
    );

    updateProfileForm.addEventListener("submit", this.handleSubmit);
    updateProfileForm.appendChild(
      (function () {
        const updateBtn = document.createElement("button");
        updateBtn.className =
          "text-xl text-white bg-dark-800 my-4 py-4 px-20 rounded-[5px] shadow-sm shadow-dark-500 hover:(transform bg-dark-600 shadow-2xl shadow-dark-800 -translate-y-[1]) active:(transform bg-dark-100 shadow-2xl shadow-dark-800 -translate-y-[0.5]) transition-all";
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
