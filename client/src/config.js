import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://praveen-blog-website.herokuapp.com/api/",
  baseURL: "/api",
});
