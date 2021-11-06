import "./ViewProfile.css";
import { MembersState } from "../../../store/members";

export class ViewProfile {
  static render(name) {
    const element = document.createElement("div");
    element.className = "view-profile-dialog-wrapper";

    const dialog = document.createElement("div");
    dialog.className = "view-profile-dialog";

    const viewProfileDetailsList = document.createElement("ul");
    viewProfileDetailsList.className = "view-profile-details-list";

    const member = MembersState.members.find((m) => m.fullname === name);
    const memberDetails = [
      { label: "Name", field: member.fullname },
      { label: "Birthday", field: member.birthday },
      { label: "Address", field: member.address },
      { label: "Email", field: member.email },
    ];
    viewProfileDetailsList.innerHTML = memberDetails
      .map(
        (member) =>
          String.raw`
          <li class="view-profile-details-list_item">
            <div class="view-profile-details-list_label">${member.label}:</div>
            <div class="view-profile-details-list_field">${member.field}</div>
          </li>
        `
      )
      .join("");

    const closeButton = document.createElement("button");
    closeButton.innerHTML = String.raw`&times;`;
    closeButton.className = "view-profile-dialog-close-btn";
    closeButton.addEventListener("click", ViewProfile.destroy);

    dialog.appendChild(closeButton);

    dialog.appendChild(
      (function () {
        const h3 = document.createElement("h1");
        h3.className = "view-profile-dialog-heading";
        h3.textContent = `Details of ${name}`;
        return h3;
      })()
    );
    dialog.appendChild(viewProfileDetailsList);
    element.appendChild(dialog);
    document.body.appendChild(element);
    const viewProfileDialogWrapper = document.querySelector(
      ".view-profile-dialog-wrapper"
    );
    const viewProfileDialog = document.querySelector(".view-profile-dialog");
    document.body.style.overflow = "hidden";
    viewProfileDialog.classList.remove("animated-wrapper-close");
    viewProfileDialog.classList.add("animated-wrapper-open");
  }
  static destroy() {
    const viewProfileDialogWrapper = document.querySelector(
      ".view-profile-dialog-wrapper"
    );
    const viewProfileDialog = document.querySelector(".view-profile-dialog");
    viewProfileDialog.classList.remove("animated-wrapper-open");
    viewProfileDialog.classList.add("animated-wrapper-close");
    setTimeout(() => {
      viewProfileDialogWrapper.removeChild(viewProfileDialog);
      document.body.removeChild(viewProfileDialogWrapper);
    }, 200);
    document.body.style.overflow = "auto";
  }
}
