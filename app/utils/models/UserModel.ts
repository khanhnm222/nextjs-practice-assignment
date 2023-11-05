import { AxiosError } from 'axios';

export interface UserResponse {
  user: string | null,
  error: AxiosError | null
}