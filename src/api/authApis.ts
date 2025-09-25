import axios from 'axios';
import { ENDPOINTS } from './endpoints';

export interface LoginPayload {
  identifier: string;
  password: string;
}

export interface IRegisterPayload {
  username: string;
  email: string;
  password: string;
  fName: string;
  lName: string;
}

export interface LoginResponse {
  jwt: string;
  user: {
    id: number;
    documentId: string;
    user_type: 'content-manager' | 'manager';
    role: 'content-manager' | 'manager' | 'Authenticated';
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>(ENDPOINTS.LOGIN, payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
    throw new Error('An unexpected error occurred');
  }
}
