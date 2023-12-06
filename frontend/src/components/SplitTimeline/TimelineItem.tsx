import { Key, PropsWithChildren } from "react";
import classNames from "classnames";
import { Position } from "@/types/ui";

import { Platform, TrackerRecord } from "@/types/model";

import { Select } from "@/components/Select";
import { Item } from "@/components/client-components";

import { TimePointMarker } from "./TimePointMarker";
import { PlatformFilter } from "./PlatformFilter";

export interface TimelineItemProps {
  date?: string;
  records?: TrackerRecord[];
  position?: Position;
  splitPlatforms?: string[];
  split?: boolean;
  platforms?: Platform[];
  onPlatformSelect: (side: "left" | "right") => (platformSlug: Key) => void;
  leftPlatform: Platform;
  rightPlatform: Platform;
}

export function TimelineItem({
  date,
  records,
  position,
  platforms,
  onPlatformSelect,
  leftPlatform,
  rightPlatform,
}: TimelineItemProps) {
  return (
    <div
      className={classNames("w-full border-t border-slate-400 px-3", {
        "border-t-0": position === "start",
        "border-b": position === "end",
      })}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-stretch">
        <Row position={position}>
          {position === "start" && (
            <Select<Platform>
              label="Select plaform"
              items={platforms}
              selectedKey={leftPlatform.slug}
              onSelectionChange={onPlatformSelect("left")}
            >
              {(item) => <Item key={item.slug}>{item.name}</Item>}
            </Select>
          )}

          <PlatformFilter
            key={leftPlatform.slug}
            platform={leftPlatform}
            records={records}
          />
        </Row>

        <TimePointMarker date={date} position={position} />

        <Row position={position}>
          {position === "start" && (
            <Select<Platform>
              label="Select plaform"
              items={platforms}
              selectedKey={rightPlatform.slug}
              onSelectionChange={onPlatformSelect("right")}
            >
              {(item) => <Item key={item.slug}>{item.name}</Item>}
            </Select>
          )}
          <PlatformFilter
            key={rightPlatform.slug}
            platform={rightPlatform}
            records={records}
          />
        </Row>
      </div>
    </div>
  );
}

interface HeaderRowProps extends PropsWithChildren {}

function HeaderRow({ children }: HeaderRowProps) {
  return <div className="font-rubik text-xl font-bold">{children}</div>;
}

interface RowProps extends PropsWithChildren {
  position?: "start" | "end";
}

function Row({ children, position }: RowProps) {
  return (
    <div
      className={classNames("w-full", position === "start" ? "py-1" : "py-4")}
    >
      {children}
    </div>
  );
}
