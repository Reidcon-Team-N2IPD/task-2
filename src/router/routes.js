import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ErrorLayout from "../layouts/ErrorLayout";

export default [
  {
    func: () => import("../pages/home/HomePage"),
    layout: MainLayout,
    name: "Home",
    path: "/",
  },
  {
    func: () => import("../pages/profile/ProfilePage"),
    layout: MainLayout,
    name: "Profile",
    path: "/profile",
  },
  {
    func: () => import("../pages/members/MembersPage"),
    layout: MainLayout,
    name: "Members",
    path: "/members",
  },
  {
    func: () => import("../pages/auth/AuthPage"),
    layout: AuthLayout,
    name: "Auth",
    path: "/auth",
  },
  {
    func: () => import("../pages/auth/login/LoginPage"),
    layout: AuthLayout,
    name: "Login",
    path: "/login",
  },
  {
    func: () => import("../pages/auth/signup/SignupPage"),
    layout: AuthLayout,
    name: "Signup",
    path: "/signup",
  },
  {
    func: () => import("../pages/error/NotFoundPage"),
    layout: ErrorLayout,
    name: "404 Not Found",
    path: "/*",
  },
];
