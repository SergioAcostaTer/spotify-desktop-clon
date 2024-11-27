import axios from "axios";
import { getToken } from "../services/token";

let cachedToken: string | null = null;
let tokenExpiryTime: number | null = null;
let tokenRequestPromise: Promise<string> | null = null;

async function fetchToken(): Promise<string> {
  const token = await getToken();
  if (!token) {
    return "";
  }
  cachedToken = token;
  tokenExpiryTime = Date.now() + 3600 * 1000;
  tokenRequestPromise = null;

  if (!cachedToken) {
    console.error("Failed to fetch token");
  }

  return cachedToken || "";
}

async function getValidToken(): Promise<string> {
  const now = Date.now();

  if (cachedToken && tokenExpiryTime && now < tokenExpiryTime) {
    return cachedToken;
  }

  if (tokenRequestPromise) {
    return tokenRequestPromise;
  }

  tokenRequestPromise = fetchToken();
  return tokenRequestPromise;
}

export const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

spotifyApi.interceptors.request.use(async (config) => {
  const token = await getValidToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
