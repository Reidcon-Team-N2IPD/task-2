import "./ViewProfile.css";
import { MembersState } from "../../../store/members";

export class ViewProfile {
  static render(name) {
    const element = document.createElement("div");
    element.className = "view-profile-dialog-wrapper";

    const dialog = document.createElement("div");
    dialog.className = "view-profile-dialog";

    const viewProfileDetailsList = document.createElement("ul");
    viewProfileDetailsList.className =
      "flex flex-col justify-stretch items-center w-[100%] transition-all h-[100%] mt-16 ml-0 pl-0";

    const member = MembersState.members.find((m) => m.fullname === name);
    viewProfileDetailsList.innerHTML = String.raw`
        <li class="h-16 w-[100%] bg-light-200 shadow-lg mt-4 px-4 text-xl flex justify-stretch items-center ">Name : ${member.fullname}</li>
        <li class="h-16 w-[100%] bg-light-200 shadow-lg mt-4 px-4 text-xl flex justify-stretch items-center ">Birthday : ${member.birthday}</li>
        <li class="h-16 w-[100%] bg-light-200 shadow-lg mt-4 px-4 text-xl flex justify-stretch items-center ">Address: ${member.address}</li>
        <li class="h-16 w-[100%] bg-light-200 shadow-lg mt-4 px-4 text-xl flex justify-stretch items-center ">Email : ${member.email}</li>
    `;

    const closeButton = document.createElement("button");
    closeButton.innerHTML = String.raw`&times;`;
    closeButton.className =
      "text-3xl font-bold absolute top-[10px] right-[20px]";
    closeButton.addEventListener("click", ViewProfile.destroy);

    dialog.appendChild(closeButton);

    dialog.appendChild(
      (function () {
        const h3 = document.createElement("h1");
        h3.className = "text-3xl text-dark-600 mt-4";
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
