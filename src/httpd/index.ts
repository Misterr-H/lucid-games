import axios from "axios";
import Cookies from "js-cookie";

export const getAccessToken = () => Cookies.get("access_token");
export const getRefreshToken = () => Cookies.get("refresh_token");
export const isAuthenticated = () => !!getAccessToken();

const api = axios.create({
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
  baseURL: "http://localhost:3000",
});
// 401 -> accesstoken expired

export const registerUser = async (data: any) => {
  try {
    const response = await api.post("/register", data);
    return {
      status: response.status,
      message: "Registration successful",
    };
  } catch (error) {
    throw error;
  }
};

export const authenticate = async (data: any) => {
  try {
    const response = await api.post("/authenticate", data);
    const { accessToken, refreshToken } = response.data;
    Cookies.set("access_token", accessToken);
    Cookies.set("refresh_token", refreshToken);
    return {
      status: response.status,
      message: "Authentication successful",
    };
  } catch (error) {
    throw error;
  }
};

export const getUserData = async () => {
  try {
    const accessToken = getAccessToken();
    if (accessToken) {
      const response = await api.get("/userData", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    } else {
      await tokenRefresh();
      await getUserData();
    }
  } catch (error) {
    console.error("Failed to fetch user data", error);
    throw error;
  }
};

const tokenRefresh = async () => {
  try {
    const response = await api.post("/authenticate", getRefreshToken);
    const { accessToken, refreshToken } = response.data;
    Cookies.set("access_token", accessToken);
    Cookies.set("refresh_token", refreshToken);
    return {
      status: response.status,
      message: "Authentication successful",
    };
  } catch (error) {
    throw error;
  }
};

export const requestOTP = async (phoneNumber: any) => {
  try {
    const response = await api.post("/requestOTP", { phoneNumber });
    return {
      status: response.status,
      message: "OTP requested successfully",
    };
  } catch (error) {
    console.error("Failed to request OTP", error);
    throw error;
  }
};



export const verifyOTP = async (phoneNumber: any, otp: any) => {
  try {
    const response = await api.post("/verifyOTP", { phoneNumber, otp });
    const { accessToken, refreshToken } = response.data;
    Cookies.set("access_token", accessToken);
    Cookies.set("refresh_token", refreshToken);
    return {
      status: response.status,
      message: "OTP verification successful",
    };
  } catch (error) {
    console.error("Failed to verify OTP", error);
    throw error;
  }
};
