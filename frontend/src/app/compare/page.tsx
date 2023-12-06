import {
  requestCategories,
  requestPlatforms,
  requestTimeline,
} from "@/lib/api";
import { Timeline } from "@/components/SplitTimeline";

export default async function CompareRoute() {
  const timeline = await requestTimeline();
  const platforms = await requestPlatforms();
  const categories = await requestCategories();

  return (
    <main className="my-6">
      <div id="timelines" className="flex space-x-2">
        <Timeline
          timeline={timeline}
          platforms={platforms}
          categories={categories}
        />
      </div>
    </main>
  );
}
