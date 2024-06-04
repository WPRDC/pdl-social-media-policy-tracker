import { Category, Platform, Timeline } from "@/types/model";
import { Endpoint } from "@/types/api";
import { requestFunction, requestList } from "@/lib/rest-utils";

export async function requestTimeline(): Promise<Timeline> {
  return requestFunction<Timeline>(Endpoint.Timeline);
}

export async function requestLastUpdated(): Promise<{ lastUpdated: string }> {
  return requestFunction<Timeline>(Endpoint.LastUpdated);
}

export async function requestPlatforms(): Promise<Platform[]> {
  return requestList<Platform>(Endpoint.Platform);
}

export async function requestCategories(): Promise<Category[]> {
  return requestList<Category>(Endpoint.Category);
}
