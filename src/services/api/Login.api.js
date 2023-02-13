import { httpInstance } from "../utils/request";

export const LoginApi = async (body, option = {}) => {
  try {
    return httpInstance.post("/login/", body).then((response) => {
      return response.data;
    });
  } catch (error) {
    return error;
  }
};
