import { TrackerRecord } from "@/types/model";
import classNames from "classnames";
import { Position } from "@/types/ui";

import { DateMarker } from "./DateMarker";
import { TimePointMarker } from "./TimePointMarker";
import { ContentCard } from "@/components/ContentCard";

export interface TimelineItemProps {
  date?: string;
  records?: TrackerRecord[];
  position?: Position;
}

export function TimelineItem({ date, records, position }: TimelineItemProps) {
  return (
    <div className="flex w-full items-stretch px-1">
      <DateMarker date={date} position={position} />
      <TimePointMarker position={position} />
      <div
        className={classNames(
          "w-full border-slate-400 py-4",
          position !== "start" && "border-t",
        )}
      >
        {records &&
          records.map((record, i) => (
            <ContentCard key={`${i}`} record={record} />
          ))}
      </div>
    </div>
  );
}
