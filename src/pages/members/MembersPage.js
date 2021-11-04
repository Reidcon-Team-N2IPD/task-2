import { getAllProfiles } from "../../services/api";
import { MembersState } from "../../store/members";
import "./MembersPage.css";

export class MembersPage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className = "members-page";

    this.element.insertAdjacentElement(
      "afterbegin",
      (function () {
        const h1 = document.createElement("h1");
        h1.className = "text-5xl text-dark-600";
        h1.textContent = "Members Page";
        return h1;
      })()
    );
    if (MembersState.members.length === 0) {
      getAllProfiles()
        .then(() => {
          MembersState.members.forEach((member) => {
            const li = document.createElement("li");
            li.textContent = member.fullname;
            this.element.appendChild(li);
          });
        })
        .catch((e) => console.log(e));
    } else {
      const that = this;
      MembersState.members.forEach(function (member) {
        const li = document.createElement("li");
        li.textContent = member.fullname;
        that.element.appendChild(li);
      });
    }

    return this.element;
  }
}
