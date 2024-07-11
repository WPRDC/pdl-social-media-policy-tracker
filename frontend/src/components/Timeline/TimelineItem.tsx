import { TrackerRecord } from "@/types/model";
import classNames from "classnames";
import { Position } from "@/types/ui";

import { DateMarker } from "./DateMarker";
import { TimePointMarker } from "./TimePointMarker";
import { ContentCard } from "@/components/ContentCard";
import { asID } from "@/lib/util";

export interface TimelineItemProps {
  date?: string;
  records?: TrackerRecord[];
  position?: Position;
}

export function TimelineItem({ date, records, position }: TimelineItemProps) {
  return (
    <div className="flex w-full items-stretch px-1" id={asID(date ?? "")}>
      <DateMarker date={date} position={position} />
      <TimePointMarker position={position} />

      {/* Cards */}
      <div
        className={classNames(
          "w-full border-black py-4",
          position !== "start" && "border-t",
        )}
      >
        {records &&
          !!records.length &&
          records.map((record, i) => (
            <ContentCard key={`${i}`} record={record} />
          ))}
        {(!records || !records.length) && !position && (
          <div className="flex h-16 items-center ">
            <div className="flex items-center">
              <div className="text-sm font-medium italic text-gray-700">
                No activity this month for the selected filter criteria.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
