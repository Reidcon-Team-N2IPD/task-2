import routes from "./routes";
import { app } from "../index";
import { AuthState } from "../store/auth";

export const router = new Proxy(
  {
    routes: routes,
    currentPath: "/",
  },
  {
    set: async (obj, prop, val) => {
      if (prop === "currentPath") {
        if (!(val == "/auth" && AuthState.isLoggedIn)) {
          history.pushState(null, null, val);
          const pathExists = obj.routes.find((route) => route.path === val);

          pathExists
            ? await app.render(pathExists)
            : await app.render(obj.routes[obj.routes.length - 1]);
          obj[prop] = val;
          return true;
        }
      }
      obj[prop] = val;
      return true;
    },
  }
);
