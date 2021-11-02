import { router } from "../router/router";

export const AuthState = new Proxy(
  {
    isLoggedIn: false,
  },
  {
    set: (obj, prop, val) => {
      if (val === true) {
        localStorage.setItem("isLoggedIn", true);
        router.currentPath = "/";
      } else if (val === false) {
        localStorage.setItem("isLoggedIn", false);
        router.currentPath = "/auth";
      }
      obj[prop] = val;
      return true;
    },
  }
);
