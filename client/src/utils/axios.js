import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", //local server for development
  // baseURL: "/api", // Nginx, if used on deployment, will forward this to the backend regardless of the backend's port number specified in it's .env.
});

export default axiosInstance;
