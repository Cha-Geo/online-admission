import { AxiosError } from "axios";
import { cookies } from "next/headers";


const setRequestOptions = (method: string) => {
      const myInit: RequestInit = {
        method: method,
        mode: "cors",
        cache: 'no-store',
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
      };
    return myInit;
}

export async function myGetWithCredentials(url: string) {
  const fetchUrl = `${process.env.API_BASE_URL}/${url}`;
  const getInit = setRequestOptions('GET')
    try {
    const res = await fetch(fetchUrl, getInit);

    if (!res.ok) {
      console.log("Network response was not ok");
    }
    const data = await res.json();

    return data;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log("Error Occured While Fetching Data: " + error.message);
    return error.message;
  }
}

