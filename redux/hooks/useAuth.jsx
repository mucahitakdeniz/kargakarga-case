import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
} from "../features/authSlice";

const useAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const BASE_URL = process.env.BASE_URL;

  const login = async (userData) => {
    dispatch(fetchStart());
    console.log(BASE_URL);
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login/`, userData);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login Successful");
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
      dispatch(fetchFail());
      toastErrorNotify("Login Fail");
    }
  };

  const logout = async () => {
    dispatch(logoutSuccess());
    toastSuccessNotify("Logout Successful");
    router.push("/login");
  };

  const register = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/register/`, userData);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Register Successful");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
      dispatch(fetchFail());
      toastErrorNotify("Register Fail");
    }
  };

  return { login, logout, register };
};

export default useAuth;
