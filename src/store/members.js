export const MembersState = new Proxy(
  {
    members: [],
  },
  {
    // set: (obj, prop, val) => {
    //   obj[prop] = val;
    //   if (val === true) {
    //     localStorage.setItem("isLoggedIn", true);
    //     router.currentPath = "/";
    //   } else if (val === false) {
    //     localStorage.setItem("isLoggedIn", false);
    //     localStorage.setItem("profile", null);
    //     router.currentPath = "/auth";
    //   }
    //   return true;
    // },
  }
);
