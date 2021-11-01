import { HomePage } from "../pages/home/home";
import { ProfilePage } from "../pages/profile/profile";
import { AuthPage } from "../pages/auth/auth";
import { PasanPage } from "../pages/pasan/pasan";
import { NipunPage } from "../pages/nipun/nipun";

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
  {
    func: PasanPage,
    name: "Pasan",
    path: "/pasan",
  },
  {
    func: NipunPage,
    name: "Nipun",
    path: "/nipun",
  },
];
