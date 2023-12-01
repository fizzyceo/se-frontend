/* eslint-disable no-debugger */
import axios from "axios";
import { tokenHelper } from "./token_helper";

// const baseURL = "https://iot-khalidghanamy.vercel.app";
// const baseURL = process.env.REACT_APP_API_URL;
const baseURL = "http://localhost:5000";
// Create axios Instance
export const axiosHelper = axios.create();

// Axios Defaults
axiosHelper.defaults.baseURL = baseURL;
axiosHelper.defaults.headers.post["Content-Type"] = "application/json";
const token = tokenHelper.getToken() || null;
axiosHelper.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// interceptors
axiosHelper.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    // debugger

    // alert(error.response.data.message);
    throw error;
  }
);
