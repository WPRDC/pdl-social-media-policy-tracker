import { ReactElement } from "react";
import classNames from "classnames";
import { Position } from "@/types/ui";

export interface TimePointMarkerProps {
  position?: Position;
}

export function TimePointMarker({
  position,
}: TimePointMarkerProps): ReactElement {
  return (
    /* container */
    <div
      className={classNames(
        "relative flex w-10 flex-shrink-0 pr-4 md:w-12",
        !position && "items-center",
        position === "start" && "items-start",
        position === "end" && "items-end",
        position !== "start" && "border-t border-black",
      )}
    >
      {/* circle */}
      <div
        className={classNames(
          "flex flex-col items-center rounded-full border-8 border-black bg-black",
          !position
            ? "h-6 w-6 bg-black md:h-8 md:w-8"
            : "mx-auto h-3 w-3 border-black bg-black md:h-6 md:w-6",
        )}
      >
        {/* line */}
        <div
          className={classNames(
            "absolute top-0 -z-30 h-full border-4 border-black",
            position === "start" && "rounded-t-full",
            position === "end" && "rounded-b-full",
          )}
        />
      </div>
    </div>
  );
}
