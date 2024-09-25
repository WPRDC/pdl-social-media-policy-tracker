import {
  requestCategories,
  requestLastUpdated,
  requestPlatforms,
  requestTimeline,
} from "@/lib/api";
import { Timeline } from "@/components/SplitTimeline";

export default async function CompareRoute() {
  const timeline = await requestTimeline();
  const platforms = await requestPlatforms();
  const categories = await requestCategories();
  const { lastUpdated } = await requestLastUpdated();

  return (
    <div
      id="timelines"
      className="h-full w-full flex-grow overflow-x-auto lg:relative lg:overflow-auto"
    >
      <Timeline
        timeline={timeline}
        platforms={platforms}
        categories={categories}
        lastUpdated={lastUpdated}
      />
    </div>
  );
}
