import { routes } from "./routes";
import { app } from "../index";
import { AuthState } from "../store/auth";

export const router = new Proxy(
  {
    routes: routes,
    currentPath: "/",
  },
  {
    set: (obj, prop, val) => {
      if (prop === "currentPath") {
        if (!(val == "/auth" && AuthState.isLoggedIn)) {
          history.pushState(null, null, val);
          app.render(obj.routes.find((r) => r.path === val));
          obj[prop] = val;
          return true;
        }
      }
      obj[prop] = val;
      return true;
    },
  }
);
