import { ReactElement } from "react";
import classNames from "classnames";
import { Position } from "@/types/ui";

export interface DateMarkerProps {
  date?: string;
  position?: Position;
  className?: string;
}

export function DateMarker({
  date,
  position,
  className,
}: DateMarkerProps): ReactElement {
  function getPositionText(position?: Position) {
    if (!position) return "";
    return position === "start" ? "Today" : "";
  }

  const [month, year] = date
    ? new Date(date)
        .toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        })
        .split(" ")
    : [undefined, undefined];

  const positionText = position ? getPositionText(position) : undefined;

  return (
    <div
      className={classNames(
        "flex-shrink-0",
        position !== "start" && "border-t border-black",
        position === "start" && "-mt-3 pb-3 md:-mt-1.5 lg:py-0 ",
        className,
      )}
    >
      <h3 className="w-24 font-mono text-xl font-black uppercase leading-none lg:text-2xl">
        {month && (
          <>
            {month}
            <br />
            {year}
          </>
        )}

        {positionText}
      </h3>
    </div>
  );
}
