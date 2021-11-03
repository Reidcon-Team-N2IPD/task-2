import { AuthPage } from "../pages/auth/auth";
import { LoginPage } from "../pages/auth/login/login";
import { SignupPage } from "../pages/auth/signup/signup";
import { HomePage } from "../pages/home/Home";
import { ProfilePage } from "../pages/profile/Profile";

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
