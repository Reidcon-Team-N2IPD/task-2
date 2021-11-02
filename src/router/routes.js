import { HomePage } from "../pages/home/home";
import { ProfilePage } from "../pages/profile/profile";
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
