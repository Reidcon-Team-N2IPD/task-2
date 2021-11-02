import { router } from "../router/router";

export const AuthState = new Proxy(
  {
    isLoggedIn: false,
  },
  {
    set: (obj, prop, val) => {
      if (val === true) {
        router.currentPath = "/";
        alert("Successfully authenticated!");
      }
      obj[prop] = val;
      return true;
    },
  }
);
