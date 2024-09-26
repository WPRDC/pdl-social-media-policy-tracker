import {
  requestCategories,
  requestLastUpdated,
  requestPlatforms,
  requestTimeline,
} from "@/lib/api";
import { Timeline } from "@/components/Timeline";

export const revalidate = 60;

export default async function TimelineRoute() {
  const timeline = await requestTimeline();
  const platforms = await requestPlatforms();
  const categories = await requestCategories();
  const { lastUpdated } = await requestLastUpdated();

  return (
    <div className="h-full w-full flex-grow overflow-auto lg:relative">
      <Timeline
        timeline={timeline}
        platforms={platforms}
        categories={categories}
        lastUpdated={lastUpdated}
      />
    </div>
  );
}
