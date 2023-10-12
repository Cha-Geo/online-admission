import axios, { AxiosError } from "axios";

const API_BASE_URL = "http://localhost:7700/api";

export async function fetchProgramDetails(programID: string) {
  try {
    const response = await axios.get(`${process.env.API_BASE_URL}/programs/${programID}`);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log(error.response?.data.message);
    throw new Error("Error fetching program details: " + error.message);
  }
}
// Add more data fetching functions as needed



//FETCH API
//SEVER SIDE RENDERING
//STATIC SITE GENERATION

export async function signUserIn(data: any) {
  const loginUrl = `${API_BASE_URL}/auth/login`;
  const postInit: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    mode: "cors",
    cache: "default",
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(loginUrl, postInit);

    if (!res.ok) {
      console.log('Network response was not ok'); 
    }
    const user = await res.json();
    console.log(user);

    return user;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log(error.response?.data.message);
    console.log("Error Logging User In: " + error.message);
  }
}

export async function createProgram(data: any) {
  const loginUrl = `${process.env.API_BASE_URL}/programmes`;
  const postInit: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    mode: "cors",
    cache: "default",
    credentials: "include",
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(loginUrl, postInit);

    if (!res.ok) {
      console.log("Network response was not ok");
    }
    const user = await res.json();
    console.log(user);

    return user;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log(error.response?.data.message);
    console.log("Error creating program: " + error.message);
  }
}


export async function testDownload(data: any) {
  const loginUrl = `${process.env.API_BASE_URL}/programmes`;
  const postInit: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    mode: "cors",
    cache: "default",
    credentials: "include",
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch(loginUrl, postInit);

    if (!res.ok) {
      console.log("Network response was not ok");
    }
    const user = await res.json();
    console.log(user);

    return user;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log(error.response?.data.message);
    console.log("Error creating program: " + error.message);
  }
}