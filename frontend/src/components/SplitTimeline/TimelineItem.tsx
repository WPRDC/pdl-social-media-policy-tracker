import { Key, PropsWithChildren } from "react";
import classNames from "classnames";
import { Position } from "@/types/ui";

import { Platform, TrackerRecord } from "@/types/model";

import { Select } from "@/components/Select";
import { Item } from "@/components/client-components";

import { TimePointMarker } from "./TimePointMarker";
import { PlatformFilter } from "./PlatformFilter";
import { BiPlus, BiX } from "react-icons/bi";
import { MAX_PLATFORMS } from "@/lib/util";

export interface TimelineItemProps {
  date?: string;
  records?: TrackerRecord[];
  position?: Position;
  splitPlatforms?: string[];
  split?: boolean;
  platforms: Platform[];
  onPlatformSelect: (index: number) => (platformSlug: Key | null) => void;
  timelinePlatforms: Platform[];
}

function getNextPlatform(platforms: Platform[], selected: Platform[]) {
  const selectedSlugs = selected.map((p) => p.slug);
  for (let platform of platforms) {
    if (!selectedSlugs.includes(platform.slug)) return platform.slug;
  }
}

export function TimelineItem({
  date,
  records,
  position,
  platforms,
  onPlatformSelect,
  timelinePlatforms,
}: TimelineItemProps) {
  return (
    <div
      className={classNames("w-full border-t border-slate-400 px-3", {
        "border-t-0": position === "start",
        "border-b": position === "end",
      })}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-stretch">
        {timelinePlatforms.map((platform, index) => (
          <>
            {!!index && <TimePointMarker date={date} position={position} />}
            <Row position={position}>
              {position === "start" && (
                <>
                  <Select<Platform>
                    label="Select plaform"
                    items={platforms}
                    selectedKey={platform.slug}
                    onSelectionChange={onPlatformSelect(index)}
                  >
                    {(item) => <Item key={item.slug}>{item.name}</Item>}
                  </Select>
                  {index > 1 && (
                    <button
                      className="active:shadow-md-inner mt-1.5 flex items-center rounded-md border-2 border-black bg-red-300 px-1 py-0.5 font-mono text-sm hover:shadow-md active:bg-red-400"
                      onClick={() => onPlatformSelect(index)(null)}
                    >
                      <BiX />
                      <div>Remove</div>
                    </button>
                  )}
                </>
              )}

              <PlatformFilter
                key={timelinePlatforms[0].slug}
                platform={platform}
                records={records}
              />
            </Row>

            {position === "start" &&
              index === timelinePlatforms.length - 1 &&
              index + 1 < MAX_PLATFORMS && (
                <div className="flex items-center">
                  <button
                    className="active:shadow-md-inner flex items-center rounded-md border-2 border-black bg-green-300 px-1.5 py-1 font-mono hover:shadow-md active:bg-green-400"
                    onClick={() =>
                      onPlatformSelect(index + 1)(
                        getNextPlatform(platforms, timelinePlatforms) ??
                          platforms[index + 1].slug,
                      )
                    }
                  >
                    <BiPlus />
                    <div className="text-sm">Add</div>
                  </button>
                </div>
              )}
          </>
        ))}
      </div>
    </div>
  );
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
