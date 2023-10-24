'us client'
import { API } from "@/app/api/config";
import axios from "axios";
import { useSession } from "next-auth/react";

const ReturnSession = () => {
    const { data: session } = useSession();
    return session;
}

export function authHeader() {
    const session = ReturnSession();
    console.log(session);
    const user = session?.user;
    const token = session?.access_token;
  if (user && token) {
    return {
      Authorization: `Bearer ${token}`,
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
  fetch(`${API}/${url}`, { headers: authHeader() }).then((res) =>
    res.json()
  );

const PostRequest = async (url: string, payload: any) => {
  return axios.post(`${API}/${url}`, payload, { headers: authHeader() });
};

const PutRequest = async (url: string, payload: any) => {
  return axios.put(`${API}/${url}`, payload, { headers: authHeader() });
};

const DeleteRequest = async (url: string, payload = {}) => {
  return axios.delete(`${API}/${url}`, {
    headers: authHeader(),
    data: payload,
  });
};
const GetRequest = async (url: any) => {
  return axios.get(`${API}/${url}`, { headers: authHeader() });
};

export { PostRequest, PutRequest, DeleteRequest, GetRequest };
