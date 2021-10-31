import { HomePage } from "../pages/home/home";
import { ProfilePage } from "../pages/profile/profile";

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
];
