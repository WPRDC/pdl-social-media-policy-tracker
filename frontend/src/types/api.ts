export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type ParamValue = string | number | boolean | null | undefined;

export type ParamsRecord = Record<string, ParamValue>;

export interface APIOptions extends RequestInit {
  id?: string | number | null;
  params?: ParamsRecord;
  headers?: HeadersInit;
  fetchInit?: {};
  credentials?: "omit" | "same-origin" | "include";
  controller?: AbortController;
}

export enum Endpoint {
  Timeline = "tracker/timeline",
  LastUpdated = "tracker/last-updated",
  Records = "tracker/records",
  Category = "tracker/category",
  Platform = "tracker/platform",
  Firm = "tracker/firm",
  Citation = "tracker/citation",
}

export interface RESTListOptions {
  params?: ParamsRecord;
}

export interface RESTRetrieveOptions extends RESTListOptions {
  id: string | number;
}

export interface DjangoResponse<T> {
  count: number;
  next: number | null;
  previous: number | null;
  results: T[];
}
