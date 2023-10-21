import { AxiosError } from "axios";

export async function clientFetcher<JSON = any>(
  url: string,
  token?: string,
  method?: RequestMethod,
  cache?: RequestCache
): Promise<JSON> {
  const options: RequestInit = {
    method: method ? method : "GET",
    cache: cache ? cache : "default",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      if (res.status === 401)
        throw new Error(`${res.statusText}: Login again and come back.`);

      throw new Error(`Network response was not ok`);
    }
    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log(err.message);
    return err.message;
  }
}

export async function clientUploadFetcher(
  url: string,
  token: string,
  method?: RequestMethod,
  cache?: RequestCache,
): Promise<Response> {
  
  const options: RequestInit = {
    method: method ? method : "GET",
    cache: cache ? cache : "default",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await fetch(url, options);

    console.log(res);

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