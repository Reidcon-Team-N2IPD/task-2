import "./ProfilePage.css";
import { UpdateProfile } from "./components/UpdateProfileDialog";
import { ProfileState } from "../../store/profile";
export default class ProfilePage {
  constructor() {
    this.element = document.createElement("main");
    const dialogWrapper = new UpdateProfile();
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

    viewProfileDetailsList.innerHTML = String.raw`
        <li class="profile-details-list_item">Birthday : ${this.profile.birthday}</li>
        <li class="profile-details-list_item">Address: ${this.profile.address}</li>
        <li class="profile-details-list_item">Email : ${this.profile.email}</li>
    `;

    this.element.appendChild(viewProfileDetailsList);

    const openUpdateDialogBtn = document.createElement("button");
    openUpdateDialogBtn.textContent = "Update Profile";
    openUpdateDialogBtn.className = "open-update-dialog-btn";
    this.element.appendChild(openUpdateDialogBtn);
    this.element.appendChild(dialogWrapper.element);

    const deleteAccountBtn = document.createElement("button");
    deleteAccountBtn.textContent = "Delete Account";
    deleteAccountBtn.className = "delete-account-btn";
    this.element.appendChild(deleteAccountBtn);

    openUpdateDialogBtn.addEventListener("click", UpdateProfile.toggleDialog);
    return this.element;
  }
}
