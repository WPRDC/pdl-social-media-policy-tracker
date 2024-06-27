"use client";

import { Key, useState } from "react";
import {
  Category,
  Platform,
  type Timeline,
  TrackerRecord,
} from "@/types/model";
import { Set } from "immutable";

import { TimelineItem } from "./TimelineItem";

export interface TimelineProps {
  timeline: Timeline;
  platforms: Platform[];
  categories: Category[];
  size?: "S" | "M" | "L";
}

export function Timeline({ timeline, platforms, categories }: TimelineProps) {
  const [timelinePlatforms, setTimelinePlatforms] = useState<Platform[]>([
    platforms[0],
    platforms[2],
  ]);

  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    Set(categories.map((c) => c.slug)),
  );

  function getPlatformBySlug(slug: string) {
    return platforms.find((p) => p.slug === slug);
  }

  const handlePlatformSelection = (index: number) => (slug: Key | null) => {
    // handle delete action slug === null
    if (slug === null) {
      setTimelinePlatforms(
        timelinePlatforms.reduce<Platform[]>((acc, cur, i) => {
          if (i === index) return acc; // skip deleted item
          return [...acc, cur];
        }, []),
      );
    }
    // update current column
    else if (typeof slug === "string") {
      // if beyond length of list, add new one and break
      if (index >= timelinePlatforms.length) {
        setTimelinePlatforms([
          ...timelinePlatforms,
          getPlatformBySlug(slug) ?? platforms[index],
        ]);
      } else {
        // replace platform at index
        setTimelinePlatforms(
          timelinePlatforms.map((p, i) =>
            i === index ? getPlatformBySlug(slug) ?? platforms[index] : p,
          ),
        );
      }
    } else {
      throw TypeError("Form selection key must be a string");
    }
  };

  function filterRecords(records: TrackerRecord[]) {
    return records
      .filter((r) => selectedCategories.has(r.category.slug))
      .filter((r) =>
        timelinePlatforms.map((p) => p.slug).includes(r.platform.slug),
      );
  }

  return (
    <div className="w-full">
      <TimelineItem
        position="start"
        platforms={platforms}
        onPlatformSelect={handlePlatformSelection}
        timelinePlatforms={timelinePlatforms}
      />

      {Object.entries(timeline).map(([date, records]) => {
        const filteredRecords = filterRecords(records);
        if (!!filteredRecords && !!filteredRecords.length)
          return (
            <TimelineItem
              key={date}
              date={date}
              records={filteredRecords}
              platforms={platforms}
              timelinePlatforms={timelinePlatforms}
              onPlatformSelect={handlePlatformSelection}
            />
          );
      })}
    </div>
  );
}
