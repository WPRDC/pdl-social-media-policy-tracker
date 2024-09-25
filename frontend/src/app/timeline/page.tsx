import {
  requestCategories,
  requestLastUpdated,
  requestPlatforms,
  requestTimeline,
} from "@/lib/api";
import { Timeline } from "@/components/Timeline";

export default async function TimelineRoute() {
  const timeline = await requestTimeline();
  const platforms = await requestPlatforms();
  const categories = await requestCategories();
  const { lastUpdated } = await requestLastUpdated();

  return (
    <div className="h-full w-full flex-grow lg:relative lg:overflow-auto">
      <Timeline
        timeline={timeline}
        platforms={platforms}
        categories={categories}
        lastUpdated={lastUpdated}
      />
    </div>
  );
}
