import { AuthPage } from "../pages/auth/AuthPage";
import { LoginPage } from "../pages/auth/login/LoginPage";
import { SignupPage } from "../pages/auth/signup/SignupPage";
import { HomePage } from "../pages/home/HomePage";
import { MembersPage } from "../pages/members/MembersPage";
import { ProfilePage } from "../pages/profile/ProfilePage";

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
    func: MembersPage,
    name: "Members",
    path: "/members",
  },
  {
    func: AuthPage,
    name: "Auth",
    path: "/auth",
  },
  {
    func: SignupPage,
    name: "Signup",
    path: "/signup",
  },
  {
    func: LoginPage,
    name: "Login",
    path: "/login",
  },
];

// routes.find(r=> r.name == )
