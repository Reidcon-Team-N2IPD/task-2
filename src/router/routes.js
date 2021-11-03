import { HomePage } from "../pages/home/Home";
import { ProfilePage } from "../pages/profile/Profile";
import { AuthPage } from "../pages/auth/auth";

export const routes = [
  {
    func: HomePage,
    name: "Home",
    path: "/",
  },
  {
    func: ProfilePage,
    name: "Profile",
    path: "/profile",
  },
  {
    func: AuthPage,
    name: "Auth",
    path: "/auth",
  },
];
