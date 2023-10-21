import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]/route";

const DEV = process.env.API_BASE_URL;
const PROD = 'prod-base-url'

export const API = DEV;

export async function fetcher<JSON = any>(
  url: string,
  method?: RequestMethod,
  cache?: RequestCache,
): Promise<JSON> {
  const fetchUrl = `${API}/${url}`;
  console.log(await authHeader());
  const options: RequestInit = {
    method: method ? method : "GET",
    cache: cache ? cache : "default",
    credentials: "include",
    headers: await authHeader(),
  };

    try {
      const res = await fetch(fetchUrl, options);

      if (!res.ok) {
        if (res.status === 401) throw new Error(`${res.statusText}: Login again and come back.`);
        
        throw new Error(`Network response was not ok`);
        
      }
      const data = await res.json();

      return data;
    } catch (err: any) {
      console.log(err.message);
      return err.message;
    }
}

export async function uploadFetcher(
  url: string,
  method?: RequestMethod,
  cache?: RequestCache
): Promise<Response> {
  const fetchUrl = `${API}/${url}`;
  console.log(await authHeader());
  const options: RequestInit = {
    method: method ? method : "GET",
    cache: cache ? cache : "default",
    credentials: "include",
    headers: await authHeader(),
  };

  try {
    const res = await fetch(fetchUrl, options);

    if (!res.ok) {
      if (res.status === 401)
        throw new Error(`${res.statusText}: Login again and come back.`);

      throw new Error(`Network response was not ok`);
    }
    return res;
  } catch (err: any) {
    console.log(err.message);
    return err.message;
  }
}

export const authHeader = async () => {
  const session = await getServerSession(authOptions);

  return {
    "Content-Type": "application/json",
    authorization: `Bearer ${session?.token}`,
  };
};
