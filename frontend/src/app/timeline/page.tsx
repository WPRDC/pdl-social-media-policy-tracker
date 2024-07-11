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
    <main className="my-6">
      <div id="timelines" className="relative flex space-x-2">
        <Timeline
          timeline={timeline}
          platforms={platforms}
          categories={categories}
          lastUpdated={lastUpdated}
        />
      </div>
    </main>
  );
}
