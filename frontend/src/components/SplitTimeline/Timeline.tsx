"use client";

import { Key, useState } from "react";
import {
  Category,
  Named,
  Platform,
  Timeline,
  TrackerRecord,
} from "@/types/model";
import { Set } from "immutable";

import { MultiSelect } from "@/components/MultiSelect";
import { SelectionItem } from "@/components/MultiSelect/SelectionItem";

import { TimelineItem } from "./TimelineItem";

export interface TimelineProps {
  timeline: Timeline;
  platforms: Platform[];
  categories: Category[];
  size?: "S" | "M" | "L";
}

export function Timeline({ timeline, platforms, categories }: TimelineProps) {
  const [leftPlatform, setLeftPlatform] = useState<Platform>(platforms[0]);
  const [rightPlatform, setRightPlatform] = useState<Platform>(platforms[1]);

  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    Set(categories.map((c) => c.slug)),
  );

  const handleFilterChange =
    (mode: "platforms" | "categories") => (value: string[]) => {
      if (!value.length) return;
      if (mode === "categories")
        setSelectedCategories(
          Set(toSlugArray(categories.filter((c) => value.includes(c.slug)))),
        );
    };

  function getPlatformBySlug(slug: string) {
    return platforms.find((p) => p.slug === slug);
  }

  const handlePlatformSelection = (side: "left" | "right") => (slug: Key) => {
    // update current column
    if (typeof slug === "string") {
      if (side === "left") {
        setLeftPlatform(getPlatformBySlug(slug) ?? platforms[0]);
      } else if (side === "right") {
        setRightPlatform(getPlatformBySlug(slug) ?? platforms[1]);
      }
    } else {
      throw TypeError("Form selection key must be a string");
    }
  };

  function filterRecords(records: TrackerRecord[]) {
    return records
      .filter((r) => selectedCategories.has(r.category.slug))
      .filter((r) =>
        [leftPlatform.slug, rightPlatform.slug].includes(r.platform.slug),
      );
  }

  return (
    <div className="w-full">
      {/*<FilterControl*/}
      {/*  selected={selectedCategories}*/}
      {/*  collection={categories}*/}
      {/*  onChange={handleFilterChange("categories")}*/}
      {/*/>*/}

      <TimelineItem
        position="start"
        platforms={platforms}
        onPlatformSelect={handlePlatformSelection}
        leftPlatform={leftPlatform}
        rightPlatform={rightPlatform}
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
              leftPlatform={leftPlatform}
              rightPlatform={rightPlatform}
              onPlatformSelect={handlePlatformSelection}
            />
          );
      })}
    </div>
  );
}

interface FilterControlProps {
  selected: Set<string>;
  collection: Named[];
  onChange: (selection: string[]) => void;
}

function FilterControl({ selected, collection, onChange }: FilterControlProps) {
  return (
    <div>
      <MultiSelect
        label="Filter Platforms"
        value={Array.from(selected)}
        onChange={onChange}
      >
        {collection.map(({ slug, name }) => (
          <SelectionItem key={slug} value={slug}>
            {name}
          </SelectionItem>
        ))}
      </MultiSelect>
    </div>
  );
}

function toSlugArray(things: Iterable<Named>): string[] {
  return Array.from(things).map((t) => t.slug);
}
