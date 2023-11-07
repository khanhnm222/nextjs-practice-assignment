import axios, { AxiosError } from "axios"
import { UserResponse } from "../models/UserModel"

export async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get('/api/auth/me')

    return {
      user: data,
      isAuthenticated: data.isAuthenticated,
      error: null
    }
  } catch (error) {
    const errors = error as AxiosError

    return {
      user: null,
      isAuthenticated: false,
      error: errors
    }
  }
}