import axios from "axios";
import { Config } from "./config";

export function authHeader() {
  const user = JSON.parse(localStorage.getItem("user")!);
  if (user && user.token) {
    return {
      Authorization: `Bearer ${user.token}`,
      "Content-Type": "application/json",
    };
  } else {
      return {
        Authorization: `invalid bearer`,
        "Content-Type": "application/json",
      };
  }
}

export const fetcher = (url: string) =>
  fetch(`${Config.API}/${url}`, { headers: authHeader() }).then((res) =>
    res.json()
  );

const PostRequest = async (url: string, payload: any) => {
  return axios.post(`${Config.API}/${url}`, payload, { headers: authHeader() });
};

const PutRequest = async (url: string, payload: any) => {
  return axios.put(`${Config.API}/${url}`, payload, { headers: authHeader() });
};

const DeleteRequest = async (url: string, payload = {}) => {
  return axios.delete(`${Config.API}/${url}`, {
    headers: authHeader(),
    data: payload,
  });
};
const GetRequest = async (url: any) => {
  return axios.get(`${Config.API}/${url}`, { headers: authHeader() });
};

export { PostRequest, PutRequest, DeleteRequest, GetRequest };
