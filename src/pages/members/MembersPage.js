import { BaseNotifier } from "../../components/base/base-notifier/BaseNotifier";
import { getAllProfiles } from "../../services/api";
import { MembersState } from "../../store/members";
import { ViewProfile } from "./components/ViewProfile";
import "./MembersPage.css";

export default class MembersPage {
  members = [];

  async loadMembers() {
    if (MembersState.members.length === 0) {
      try {
        await getAllProfiles();
        this.members = MembersState.members;
      } catch (error) {
        BaseNotifier.notify({
          message: error.message,
          type: "error",
          duration: 5000,
        });
      }
    } else {
      this.members = MembersState.members;
    }
  }

  render() {
    const template = document.createElement("main");
    template.className = "members-main";

    template.insertAdjacentElement(
      "afterbegin",
      (function () {
        const ul = document.createElement("ul");
        ul.className = "members-list";
        return ul;
      })()
    );

    this.loadMembers().then(() => {
      template.insertAdjacentElement(
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

      this.members.forEach((member) => {
        const li = document.createElement("li");
        li.className = "member-item";
        li.textContent = member.fullname;
        li.addEventListener("click", () => {
          ViewProfile.render(member.fullname);
        });
        template.appendChild(li);
      });
    });

    return template;
  }
}
