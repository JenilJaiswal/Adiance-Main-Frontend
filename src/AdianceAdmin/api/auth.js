import axios from "axios";
// process.env.NEXT_PUBLIC_API_URL || 
const API_URL = process.env.NEXT_PUBLIC_API_URL ||  "http://localhost:5000/api";

export const login = async (data) => {
  // console.log("API_URL", API_URL);
  // console.log("RESPONSE for the API_URL", data, API_URL);
  const res = await axios.post(`${API_URL}/auth/login`, data);
  return res.data;
};

export const register = async (data) => {
  const res = await axios.post(`${API_URL}/auth/register`, data);
  return res.data;
};

export const forgotPassword = async (data) => {
  const res = await axios.post(`${API_URL}/auth/forgot-password`, data);
  return res.data;
};

export const verifyOtp = async (data) => {
  const res = await axios.post(`${API_URL}/auth/verify-otp`, data);
  return res.data;
};

export const resetPassword = async (data) => {
  const res = await axios.post(`${API_URL}/auth/reset-password`, data);
  return res.data;
};
