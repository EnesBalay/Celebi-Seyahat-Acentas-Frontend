import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // API base URL'ini güncelleyin

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const makeApiRequest = async (endpoint, method, data) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data,
      withCredentials: true,
    });
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.message || "API request failed");
  }
};
