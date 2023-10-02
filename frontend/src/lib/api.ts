import { Timeline, TrackerRecord } from "@/types/model";
import { DjangoResponse, Endpoint } from "@/types/api";
import { requestFunction, requestList } from "@/lib/rest-utils";

export async function requestTrackerRecords(): Promise<
  DjangoResponse<TrackerRecord>
> {
  return requestList<TrackerRecord>(Endpoint.Records);
}

export async function requestTimeline(): Promise<Timeline> {
  return requestFunction<Timeline>(Endpoint.Timeline);
}
