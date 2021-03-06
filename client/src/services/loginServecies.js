import axios from "axios";

export const loginService = async (data) => {
  return await axios
    .post("http://localhost:9000/api/login", data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
