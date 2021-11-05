import axios from "axios";
import { BaseLoader } from "../components/base/base-loader/BaseLoader";
import { BaseNotifier } from "../components/base/base-notifier/BaseNotifier";
import { UpdateProfile } from "../pages/profile/components/UpdateProfileDialog";
import { AuthState } from "../store/auth";
import { MembersState } from "../store/members";
import { ProfileState } from "../store/profile";

const api = axios.create({
  baseURL: "https://3463d6f8-081d-458b-8a57-59f1e5d0781a.mock.pstmn.io",
  timeout: 6000,
  headers: { "Content-Type": "application/json" },
});

export const getProfileByUsername = async (username) => {
  try {
    const res = await api.get(`/profile?username=${username}`);
  } catch (error) {
    BaseNotifier.notify({
      message: error.message,
      type: "error",
      duration: 1500,
    });
  }
};

export const getAllProfiles = async () => {
  try {
    BaseLoader.show();
    const res = await api.get("/profile/get-all");
    if (res.data.message == "Successfully fetched!") {
      MembersState.members = res.data.profiles;
    }
  } catch (error) {
    BaseNotifier.notify({
      message: error.message,
      type: "error",
      duration: 1500,
    });
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
      ProfileState.profile = res.data.profile;
      localStorage.setItem("profile", JSON.stringify(res.data.profile));
    }
    BaseNotifier.notify({
      message: "Successfully registered!",
      type: "success",
      duration: 1500,
    });
  } catch (error) {
    BaseNotifier.notify({
      message: error.message,
      type: "error",
      duration: 1500,
    });
  } finally {
    BaseLoader.hide();
  }
};

export const updateProfile = async (profileDetails) => {
  try {
    BaseLoader.show();
    const res = await api.put("/profile/update", profileDetails);
    UpdateProfile.toggleDialog();
    BaseNotifier.notify({
      message: "Updated profile successfully",
      type: "success",
      duration: 1500,
    });
  } catch (error) {
    UpdateProfile.toggleDialog();
    BaseNotifier.notify({
      message: error.message,
      type: "error",
      duration: 1500,
    });
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
      ProfileState.profile = res.data.profile;
      AuthState.isLoggedIn = true;
    }
    BaseNotifier.notify({
      message: "Successfully logged in!",
      type: "success",
      duration: 1500,
    });
  } catch (error) {
    BaseNotifier.notify({
      message: error.message,
      type: "error",
      duration: 1500,
    });
  } finally {
    BaseLoader.hide();
  }
};

export const logout = () => {
  AuthState.isLoggedIn = false;
  ProfileState.profile = null;
  localStorage.setItem("profile", null);
  BaseNotifier.notify({
    message: "Successfully logged out!",
    type: "success",
    duration: 1500,
  });
};

export const deleteProfile = async () => {
  try {
    BaseLoader.show();
    await api.delete(
      `/profile/delete?username=${ProfileState.profile.username}`
    );
    BaseNotifier.notify({
      message: "Successfully logged out!",
      type: "success",
      duration: 1500,
    });
    logout();
  } catch (error) {
    BaseNotifier.notify({
      message: error.message,
      type: "error",
      duration: 1500,
    });
  } finally {
    BaseLoader.hide();
  }
};
