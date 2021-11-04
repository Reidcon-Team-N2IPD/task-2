import { getAllProfiles } from "../../services/api";
import { MembersState } from "../../store/members";
import { ViewProfile } from "./components/ViewProfile";
import "./MembersPage.css";

export class MembersPage {
  constructor() {
    this.element = document.createElement("main");
    this.element.className = "members-page";

    this.element.insertAdjacentElement(
      "afterbegin",
      (function () {
        const ul = document.createElement("ul");
        ul.className = "flex flex-col justify-center items-start list-none";
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
              h3.className = "text-3xl font-extralight";
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
            li.className =
              "h-16 w-[80vw] bg-light-200 shadow-xl mt-4 px-4 text-xl flex justify-stretch items-center cursor-pointer";
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
          h3.className = "text-3xl font-extralight";
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
        li.className =
          "h-16 w-[80vw] bg-light-200 shadow-xl mt-4 px-4 text-xl flex justify-stretch items-center cursor-pointer";
        li.textContent = member.fullname;
        that.element.appendChild(li);
      });
    }

    return this.element;
  }
}
