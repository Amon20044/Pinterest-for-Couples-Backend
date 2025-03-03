import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Adjust if needed

export const registerUser = async (userData) => {
    return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (userData) => {
    return axios.post(`${API_URL}/auth/login`, userData);
};

export const createAlbum = async (token, albumData) => {
    return axios.post(`${API_URL}/albums/create`, albumData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const getAlbums = async (token, userId) => {
    return axios.get(`${API_URL}/albums/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const uploadMedia = async (token, albumId, file) => {
    const formData = new FormData();
    formData.append("file", file);

    return axios.post(`${API_URL}/media/upload/${albumId}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    });
};

export const getAlbumMedia = async (token, albumId) => {
    return axios.get(`${API_URL}/media/${albumId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
export const getUserMedia = async (token, userId) => {
    return axios.get(`${API_URL}/media/images/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
