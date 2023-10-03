import { requestTimeline } from "@/lib/api";
import { Timeline } from "@/components/Timeline/Timeline";

export default async function Home() {
  const timeline = await requestTimeline();

  return (
    <main className="my-12">
      <Timeline timeline={timeline} />
    </main>
  );
}
