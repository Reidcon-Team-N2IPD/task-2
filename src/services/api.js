import axios from "axios";
import { BaseLoader } from "../components/base/base-loader/base-loader.js/base-loader";
import { UpdateProfile } from "../pages/profile/components/UpdateProfile";
import { AuthState } from "../store/auth";
import { MembersState } from "../store/members";

const api = axios.create({
  baseURL: "https://3463d6f8-081d-458b-8a57-59f1e5d0781a.mock.pstmn.io",
  timeout: 6000,
  headers: { "Content-Type": "application/json" },
});

export const getProfileByUsername = async (username) => {
  try {
    const res = await api.get(`/profile?username=${username}`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const getAllProfiles = async () => {
  try {
    BaseLoader.show();
    const res = await api.get("/profile/get-all");
    if (res.data.message == "Successfully fetched!") {
      MembersState.members = res.data.profiles;
    }
    console.log(MembersState);
  } catch (error) {
    console.log(error);
  } finally {
    BaseLoader.hide();
  }
};

export const createProfile = async (profileDetails) => {
  try {
    BaseLoader.show();
    const res = await api.post("/profile/create", profileDetails);
    if (res.data.message == "Successfully registered!") {
      AuthState.isLoggedIn = true;
    }
  } catch (error) {
    console.log(error);
  } finally {
    BaseLoader.hide();
  }
};

export const updateProfile = async (profileDetails) => {
  try {
    BaseLoader.show();
    const res = await api.put("/profile/update", profileDetails);
    UpdateProfile.toggleDialog();
  } catch (error) {
    console.log(error);
    UpdateProfile.toggleDialog();
  } finally {
    BaseLoader.hide();
  }
};

export const login = async (loginDetails) => {
  try {
    BaseLoader.show();
    const res = await api.post("/profile/login", loginDetails);
    if (res.data.message == "Successfully logged in!") {
      localStorage.setItem("profile", JSON.stringify(res.data.profile));
      AuthState.isLoggedIn = true;
    }
  } catch (error) {
    console.log(error);
  } finally {
    BaseLoader.hide();
  }
};

export const logout = () => {
  AuthState.isLoggedIn = false;
};
