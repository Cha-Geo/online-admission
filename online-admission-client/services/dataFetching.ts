// dataFetching.js

import axios, { AxiosError } from "axios";

const API_BASE_URL = "http://localhost:7700"; // Replace with your API base URL

export const FAKE_URL = "https://jsonplaceholder.typicode.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiWithCredential = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3001",
  },
});

export async function fetchPrograms() {
  try {
    const response = await axios.get<IPosts[]>(`${FAKE_URL}/posts`);
    // const response = await axios.get(`${API_BASE_URL}/programs`);
    return response.data;
  } 
     catch (err) {
      const error = err as AxiosError<Error>;
      console.log("Error fetching programs: " + error.message);
      //   throw new Error("Error fetching programs: " + error.message);
}
}

export async function fetchProgramDetails(programID: string) {
  try {
    const response = await axios.get(`${API_BASE_URL}/programs/${programID}`);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log(error.response?.data.message);
    throw new Error("Error fetching program details: " + error.message);
  }
}

export async function fetchUserApplications(userID: string) {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/users/${userID}/applications`
    );
    return response.data;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log(error.response?.data.message);
    throw new Error("Error fetching user applications: " + error.message);
  }
}

// Add more data fetching functions as needed



//FETCH API
//SEVER SIDE RENDERING
export async function fetchPosts() {
  const res = await fetch(`${FAKE_URL}/posts`, { cache: "no-store" });
  const posts = await res.json();

  return posts;
}

//STATIC SITE GENERATION