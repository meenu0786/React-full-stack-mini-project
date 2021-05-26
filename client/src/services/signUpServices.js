import axios from "axios";

export const signUpServices = async (data) => {
  return await axios
    .post("http://localhost:9000/api/sign-up", data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
