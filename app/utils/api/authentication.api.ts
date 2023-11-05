import { LogInModel, LogOutModel } from '../models/AuthModel';
import axios, { AxiosError } from "axios";

async function login(payload: LogInModel) {
  try {
    const { data } = await axios.post('/api/auth/login', payload);
    if (data) {
      return data
    }
  } catch (e) {
    const error = e as AxiosError;
    return error;
  }
}

async function logout(payload: LogOutModel) {
  try {
    const { data } = await axios.post('/api/auth/logout', payload);
    if (data) {
      return data
    }
  } catch (e) {
    const error = e as AxiosError;
    return error;
  }
}

export {
  login,
  logout,
}