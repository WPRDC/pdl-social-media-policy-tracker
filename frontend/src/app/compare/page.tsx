import {
  requestCategories,
  requestLastUpdated,
  requestPlatforms,
  requestTimeline,
} from "@/lib/api";
import { Timeline } from "@/components/SplitTimeline";

export const revalidate = 60;

export default async function CompareRoute() {
  const timeline = await requestTimeline();
  const platforms = await requestPlatforms();
  const categories = await requestCategories();
  const { lastUpdated } = await requestLastUpdated();

  return (
    <div className="h-full flex-grow overflow-x-scroll md:overflow-auto">
      <Timeline
        timeline={timeline}
        platforms={platforms}
        categories={categories}
        lastUpdated={lastUpdated}
      />
    </div>
  );
}
