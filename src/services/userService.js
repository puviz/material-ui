import axios from "axios";
import { baseUrl } from "../config/env";

export const getUserService = async () => {
  const apiUrl = `${baseUrl}/users`;
  let res = await axios
    .get(apiUrl)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

  return res;
};
