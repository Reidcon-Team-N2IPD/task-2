import "./UpdateProfileDialog.css";
import { updateProfile } from "../../../services/api";
import { ProfileState } from "../../../store/profile";

export class UpdateProfile {
  constructor() {
    this.element = document.createElement("div");
    this.element.className = "update-profile-dialog-wrapper hidden";

    const dialog = document.createElement("div");
    dialog.className = "update-profile-dialog";

    const updateProfileForm = document.createElement("form");
    updateProfileForm.className = "update-profile-form";

    this.profile = ProfileState.profile;

    const updateProfileFormDetails = [
      {
        type: "text",
        id: "update-username",
        field: this.profile.username,
        placeholder: "Username",
        labelClass: "input-label",
      },
      {
        type: "text",
        id: "update-fullname",
        field: this.profile.fullname,
        placeholder: "Full Name",
        labelClass: "input-label",
      },
      {
        type: "text",
        id: "update-address",
        field: this.profile.address,
        placeholder: "Address",
        labelClass: "input-label",
      },
      {
        type: "date",
        id: "update-birthday",
        field: this.profile.birthday,
        placeholder: "Birthday",
        labelClass: "input-label-birth",
      },
    ];

    updateProfileForm.innerHTML = updateProfileFormDetails
      .map(
        (item) => String.raw`
        <div class="input-group">
          <input type="${item.type}" id="${item.id}"  value="${
          item.field
        }"  required  autocomplete="false" name="${
          item.id
        }" class="input" placeholder="${item.placeholder}">
          <label class="${item.labelClass}" for="${
          item.id
        }">${item.placeholder.toUpperCase()}</label>
        </div>
    `
      )
      .join("");

    const closeButton = document.createElement("button");
    closeButton.innerHTML = String.raw`&times;`;
    closeButton.className = "update-profile-dialog-close-btn";
    closeButton.addEventListener("click", UpdateProfile.toggleDialog);

    dialog.appendChild(closeButton);

    dialog.appendChild(
      (function () {
        const h3 = document.createElement("h1");
        h3.className = "update-profile-dialog-heading";
        h3.textContent = "UPDATE PROFILE";
        return h3;
      })()
    );

    updateProfileForm.addEventListener("submit", this.handleSubmit);
    updateProfileForm.appendChild(
      (function () {
        const updateBtn = document.createElement("button");
        updateBtn.className = "update-profile-form-submit-btn";
        updateBtn.textContent = "UPDATE";
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
