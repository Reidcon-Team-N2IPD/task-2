export const AuthState = {
  isLoggedIn: false,
};

export const AuthStateProxy = new Proxy(AuthState, {
  set: (obj, prop, val) => {
    if (val === true) {
      console.log("Logged in");
      obj[prop] = val;
      return true;
    }
    obj[prop] = val;
    return true;
  },
});
