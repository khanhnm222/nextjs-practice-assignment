import { LogInModel, LogOutModel } from './models/AuthModel';
import axios, { AxiosError } from "axios";

async function login(payload: LogInModel, callback: (data: any) => void) {
  try {
    const { data } = await axios.post('/api/auth/login', payload);
    if (data) {
      callback(data);
    }
  } catch (e) {
    const error = e as AxiosError;
    alert(error.message)
  }
}

async function logout(payload: LogOutModel, callback: (data: any) => void) {
  try {
    const { data } = await axios.post('/api/auth/logout', payload);
    if (data) {
      callback(data);
    }
  } catch (e) {
    const error = e as AxiosError;
    alert(error.message)
  }
}

export {
  login,
  logout,
}