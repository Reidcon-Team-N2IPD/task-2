import axios from "axios";
import { AuthState } from "../store/auth";

const api = axios.create({
  baseURL: "https://3463d6f8-081d-458b-8a57-59f1e5d0781a.mock.pstmn.io",
  timeout: 3000,
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

export const createProfile = async (profileDetails) => {
  try {
    const res = await api.post("/profile/create-profile", profileDetails);
    if (res.data.message == "Successfully registered!") {
      AuthState.isLoggedIn = true;
    }
  } catch (error) {
    console.log(error);
  }
};
