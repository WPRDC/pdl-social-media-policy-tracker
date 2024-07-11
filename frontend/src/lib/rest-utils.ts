import { getCookie } from "@/lib/util";
import { DjangoResponse, Endpoint } from "@/types/api";

export const HOST = process.env.NEXT_PUBLIC_API_HOST || "localhost:8000";

const DEFAULT_HEADERS: HeadersInit = {
  "X-CSRFToken": getCookie("csrftoken"),
};

const DEFAULT_FETCH_OPTIONS: RequestInit = {
  credentials: "include",
};

function getEndpointURL(endpoint: Endpoint, queryParams: object) {
  const queryString = serializeParams(queryParams);
  return `${HOST}/${endpoint}${queryString ? `${queryString}` : ""}`;
}

// API functions

export async function fetchAPI<T extends object = {}>(
  endpoint: Endpoint,
  id?: string | number,
  queryParams: object = {},
  options: RequestInit = {},
): Promise<DjangoResponse<T>> {
  try {
    const { headers, ...otherOptions } = {
      ...DEFAULT_FETCH_OPTIONS,
      ...options,
    };

    // Merge default and user options
    const mergedOptions = {
      headers: { ...DEFAULT_HEADERS, ...headers },
      ...otherOptions,
    };

    // Build request URL
    const requestUrl = `${getEndpointURL(endpoint, queryParams)}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    return response.json() as Promise<DjangoResponse<T>>;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`,
    );
  }
}

/**
 * Convert an object of parameters ({param1: value1, etc...}) for a request to
 * a query string ("?param1=value1&p2=v2...") * * @param {Object} params - key value mapping of parameters
 * @returns {string} - url query string representation of `params`
 */
export function serializeParams(params?: object): string | null {
  if (!params || !Object.keys(params)) return null;
  return `?${Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&")}`;
}

export function requestSingleton<T extends object>(
  endpoint: Endpoint,
  id: string | number,
  queryParams: object = {},
  options: RequestInit = {},
) {
  return fetchAPI<T>(endpoint, id, queryParams, options) as Promise<T>;
}

export async function requestList<T extends object>(
  endpoint: Endpoint,
  queryParams: object = {},
  options: RequestInit = {},
) {
  const response = await fetchAPI<T>(endpoint, undefined, queryParams, options);
  return response.results;
}

export function requestFunction<T extends object>(
  endpoint: Endpoint,
  queryParams: object = {},
  options: RequestInit = {},
) {
  return fetchAPI<T>(endpoint, undefined, queryParams, options) as Promise<T>;
}
