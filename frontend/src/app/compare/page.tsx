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

  return (
    <main className="my-6">
      <div id="timelines" className="hidden space-x-2 md:flex">
        <Timeline
          timeline={timeline}
          platforms={platforms}
          categories={categories}
        />
      </div>
      <div className="block px-4 md:hidden">
        <p className="text-xl font-bold ">
          Comparison feature is current not available on mobile.
        </p>
        <p className="mt-2 text-lg font-medium">
          Visit the <a href="/timeline">Full Timeline</a> for a mobile-friendly
          experience.
        </p>
      </div>
    </main>
  );
}
