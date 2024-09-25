import { ReactElement } from "react";
import classNames from "classnames";
import { Position } from "@/types/ui";

export interface TimePointMarkerProps {
  position?: Position;
  date?: string;
}

function getPositionText(position?: Position) {
  if (!position) return "";
  return position === "start" ? "Today" : "";
}

export function TimePointMarker({
  position,
  date,
}: TimePointMarkerProps): ReactElement | null {
  const content = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      })
    : getPositionText(position);

  return (
    /* container */
    <div
      className={classNames(
        "relative flex w-32 flex-shrink-0 px-5",
        !position && "items-center",
      )}
    >
      {!position && (
        <div className="flex flex-grow flex-col items-center">
          {/* Date Circle */}
          {!!content && (
            <div className="absolute z-20 -mt-8 flex size-20 items-center rounded-full border-4 border-stone-800 bg-white">
              <div className="w-full px-1 text-center font-mono text-lg font-bold uppercase  leading-none text-black">
                {content}
              </div>
            </div>
          )}
          {/* line */}
          <div
            className={classNames(
              "absolute top-0 z-10 box-content h-full border-4 border-stone-800 ",
            )}
          />
        </div>
      )}
    </div>
  );
}
