import { Timeline } from "@/types/model";
import { TimelineItem } from "@/components/Timeline/TimelineItem";

export interface TimelineProps {
  timeline: Timeline;
}

export function Timeline({ timeline }: TimelineProps) {
  return (
    <div className="w-full max-w-screen-lg md:mx-auto">
      <TimelineItem position="start" />
      {Object.entries(timeline).map(([date, records]) => (
        <TimelineItem key={date} date={date} records={records} />
      ))}
      <TimelineItem position="end" />
    </div>
  );
}
