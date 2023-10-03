import axios, { AxiosError } from "axios";

const API_BASE_URL = "http://localhost:7700/api"; // Replace with your API base URL

export const FAKE_URL = "https://jsonplaceholder.typicode.com";

const requestOptions = {
  method: "GET", // Replace with the HTTP method you need (GET, POST, PUT, DELETE, etc.)
  credentials: "include", // Use 'include' to send cookies and other credentials
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    // Add other headers as needed
  },
};

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");

const myInit: RequestInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "no-cache",
  credentials: "include",
};



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
    try {
        const res = await fetch(`${FAKE_URL}/posts`, { cache: "no-store" });
        const posts = await res.json();

        return posts;
    } catch (err) {
        const error = err as AxiosError<Error>;
        console.log(error.response?.data.message);
        console.log("Error fetching user posts: " + error.message);
    }
}

//STATIC SITE GENERATION
export async function fetchStaticPosts() {
  try {
    const res = await fetch(`${FAKE_URL}/posts`);
    const posts = await res.json();

    return posts;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log(error.response?.data.message);
    console.log("Error fetching user posts: " + error.message);
  }
}

export async function fetchStaticPost(params: any) {
  try {
    const res = await fetch(`${FAKE_URL}/posts/${params.programID}`);
    const post: IPosts = await res.json();

    return post;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log(error.response?.data.message);
    console.log("Error fetching user posts: " + error.message);
  }
}

export async function fetchUsers() {
      try {
        const res = await fetch(`${API_BASE_URL}/applicants`, myInit);
        const users = await res.json();

        return users;
      } catch (err) {
        const error = err as AxiosError<Error>;
        console.log(error.response?.data.message);
        console.log("Error fetching user posts: " + error.message);
      }
}

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
    credentials: "include",
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