import axios from "axios";
import { baseUrl } from "../config/baseUrl";

const token = localStorage.getItem("token");
export const httpInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer${token}`,
  },
});
