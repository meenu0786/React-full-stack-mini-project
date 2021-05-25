import axios from "axios";

export const loginService = async () => {
  return await axios
    .get("http://localhost:9000/api/login")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
