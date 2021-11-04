import { getAllProfiles } from "../../services/api";
import { MembersState } from "../../store/members";
import { ViewProfile } from "./components/ViewProfile";
import "./MembersPage.css";

export class MembersPage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className = "members-main";

    this.element.insertAdjacentElement(
      "afterbegin",
      (function () {
        const ul = document.createElement("ul");
        ul.className = "members-list";
        return ul;
      })()
    );
    if (MembersState.members.length === 0) {
      getAllProfiles()
        .then(() => {
          this.element.insertAdjacentElement(
            "afterbegin",
            (function () {
              const h3 = document.createElement("h3");
              h3.className = "members-heading";
              h3.innerText = `${
                MembersState.members.length === 1
                  ? "There's only 1 customer."
                  : "There are " + MembersState.members.length + " members"
              }`;
              return h3;
            })()
          );
          MembersState.members.forEach((member) => {
            const li = document.createElement("li");
            li.className = "member-item";
            li.textContent = member.fullname;
            li.addEventListener("click", () => {
              ViewProfile.render(member.fullname);
            });
            this.element.firstChild.nextSibling.appendChild(li);
          });
        })
        .catch((e) => console.log(e));
    } else {
      const that = this;
      this.element.insertAdjacentElement(
        "afterbegin",
        (function () {
          const h3 = document.createElement("h3");
          h3.className = "members-heading";
          h3.innerText = `${
            MembersState.members.length === 1
              ? "There's only 1 customer."
              : "There are " + MembersState.members.length + " members"
          }`;
          return h3;
        })()
      );
      MembersState.members.forEach(function (member) {
        const li = document.createElement("li");
        li.className = "member-item";
        li.textContent = member.fullname;
        li.addEventListener("click", () => {
          ViewProfile.render(member.fullname);
        });
        that.element.appendChild(li);
      });
    }

    return this.element;
  }
}
