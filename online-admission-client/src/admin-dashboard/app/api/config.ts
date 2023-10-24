import axios from "axios";
import useSWR from "swr";

const DEV = process.env.NEXT_PUBLIC_API_URL;
const PROD = "prod-base-url";

export const API = DEV;

export const Config: { API: string } = {
  API: process.env.NEXT_PUBLIC_API_URL || "",
};

// utils/fetcher.js

// Axios instance for making API requests
const axiosInstance = axios.create({
  baseURL: API, // Replace with your API endpoint
});

// Custom fetcher function for useSWR
const fetcher = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useCustomSWR = (key: string) => {
  // Use SWR with the custom fetcher
  const { data, error, isLoading } = useSWR(key, fetcher);

  return {
    data,
    error,
    isLoading,
    // isLoading: !data && !error,

  };
};
