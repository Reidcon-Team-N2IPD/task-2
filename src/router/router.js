import { routes } from "./routes";
import { app } from "../index";

const router = {
  routes: routes,
  currentPath: "/",
};

export const routerProxy = new Proxy(router, {
  set: (obj, prop, val) => {
    if (prop === "currentPath") {
      app.render(obj.routes.find((r) => r.path === val));
    }
    obj[prop] = val;
    return true;
  },
});
