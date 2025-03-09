import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const register = async (data: { name: string; email: string; password: string }) => {
  return axios.post(`${API_BASE_URL}/auth/register`, data);
};

export const login = async (data: { email: string; password: string }) => {
  return axios.post(`${API_BASE_URL}/auth/login`, data);
};

export const getDashboard = async (userId: string) => {
  return axios.get(`${API_BASE_URL}/auth/${userId}`);
};
