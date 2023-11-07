import { AxiosError } from 'axios';

export interface UserResponse {
  user: string | null,
  isAuthenticated: boolean,
  error: AxiosError | null
}