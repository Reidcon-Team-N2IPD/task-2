import { router } from "../router/router";
import { MembersState } from "./members";

export const AuthState = new Proxy(
  {
    isLoggedIn: false,
  },
  {
    set: (obj, prop, val) => {
      obj[prop] = val;
      if (val === true) {
        localStorage.setItem("isLoggedIn", true);
        if (
          router.currentPath === "/login" ||
          router.currentPath === "/signup"
        ) {
          router.currentPath = "/";
        }
      } else if (val === false) {
        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("profile", null);
        MembersState.members = [];
        router.currentPath = "/auth";
      }
      return true;
    },
  }
);
