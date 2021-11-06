import "./ProfilePage.css";
import { UpdateProfile } from "./components/UpdateProfileDialog";
import { DeleteProfile } from "./components/DeleteProfileDialog";
import { ProfileState } from "../../store/profile";
export default class ProfilePage {
  constructor() {
    this.element = document.createElement("main");
    const updateDialogWrapper = new UpdateProfile();
    const deleteDialogWrapper = new DeleteProfile();
    this.element.className = "profile-main";
    const heading = document.createElement("h1");
    heading.className = "profile-heading";
    this.profile = ProfileState.profile;
    const fullname = this.profile.fullname;
    heading.textContent = `${fullname}`;
    this.element.insertAdjacentElement("afterbegin", heading);

    const avatar = document.createElement("img");
    avatar.className = "profile-avatar";
    avatar.src = this.profile.avatar;

    this.element.appendChild(avatar);

    const viewProfileDetailsList = document.createElement("ul");
    viewProfileDetailsList.className = "profile-details-list";

    const memberDetails = [
      { label: "Birthday", field: this.profile.birthday },
      { label: "Address", field: this.profile.address },
      { label: "Email", field: this.profile.email },
    ];

    viewProfileDetailsList.innerHTML = memberDetails
      .map(
        (member) =>
          String.raw`
          <li class="profile-details-list_item">
            <div class="profile-details-list_label">${member.label}:</div>
            <div class="profile-details-list_field">${member.field}</div>
          </li>
        `
      )
      .join("");

    this.element.appendChild(viewProfileDetailsList);

    const profileBtnContainer = document.createElement("div");
    profileBtnContainer.className = "profile-btn-container";

    const openUpdateDialogBtn = document.createElement("button");
    openUpdateDialogBtn.textContent = "Update Profile";
    openUpdateDialogBtn.className = "open-update-dialog-btn";
    profileBtnContainer.appendChild(openUpdateDialogBtn);
    this.element.appendChild(updateDialogWrapper.element);
    this.element.appendChild(deleteDialogWrapper.element);

    const deleteAccountBtn = document.createElement("button");
    deleteAccountBtn.textContent = "Delete Account";
    deleteAccountBtn.className = "delete-account-btn";
    profileBtnContainer.appendChild(deleteAccountBtn);

    this.element.appendChild(profileBtnContainer);

    openUpdateDialogBtn.addEventListener("click", UpdateProfile.toggleDialog);
    deleteAccountBtn.addEventListener("click", DeleteProfile.toggleDialog);
    return this.element;
  }
}
