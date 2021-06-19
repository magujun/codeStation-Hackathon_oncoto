import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  headers: {
    Authorization: process.env.FRONTEND_AUTH_KEY,
  }
});
