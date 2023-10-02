import { ReactElement } from "react";
import classNames from "classnames";
import { Position } from "@/types/ui";

export interface DateMarkerProps {
  date?: string;
  position?: Position;
}

export function DateMarker({ date, position }: DateMarkerProps): ReactElement {
  function getPositionText(position?: Position) {
    if (!position) return "";
    return position === "start" ? "Today" : "";
  }

  const content = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      })
    : getPositionText(position);

  return (
    <div
      className={classNames(
        "flex w-16 flex-shrink-0 items-center md:w-32 lg:w-40",
        position !== "start" && "border-t border-black",
      )}
    >
      <div className="w-full px-4 text-right font-mono font-black uppercase md:text-xl lg:text-2xl">
        {content}
      </div>
    </div>
  );
}
