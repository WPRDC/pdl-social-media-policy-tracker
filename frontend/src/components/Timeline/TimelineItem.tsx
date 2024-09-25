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
    <article className="flex w-full items-stretch px-1" id={asID(date ?? "")}>
      {/* Big screen date marker - also header*/}
      <DateMarker
        date={date}
        position={position}
        className="hidden py-6 pr-2 text-right md:block"
      />
      <TimePointMarker position={position} aria-hidden />

      {/* Cards */}
      <div
        className={classNames(
          "w-full border-black md:py-4",
          position !== "start" && "border-t",
        )}
      >
        {/* Small screen date marker - also header*/}
        <DateMarker
          date={date}
          position={position}
          className="my-0 block w-full border-none p-0 pt-3 md:hidden"
        />

        {/* Policy cards*/}
        {records && !!records.length && (
          <section aria-label={`policy changes`}>
            {records.map((record, i) => (
              <ContentCard key={`${i}`} record={record} />
            ))}
          </section>
        )}

        {/* Empty message */}
        {(!records || !records.length) && !position && (
          <div className="flex h-12 items-center md:h-16 ">
            <div className="flex items-center">
              <div className="text-sm font-medium italic text-gray-700">
                No activity this month for the selected filter criteria.
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
