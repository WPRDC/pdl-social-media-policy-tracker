"use client";

import {
  Category,
  Named,
  Platform,
  Timeline,
  TrackerRecord,
} from "@/types/model";
import { TimelineItem } from "@/components/Timeline/TimelineItem";
import { useState } from "react";

import { Set } from "immutable";
import { MultiSelect } from "@/components/MultiSelect";
import { SelectionItem } from "@/components/MultiSelect/SelectionItem";

export interface TimelineProps {
  timeline: Timeline;
  platforms: Platform[];
  categories: Category[];
  size?: "S" | "M" | "L";
}

export function Timeline({ timeline, platforms, categories }: TimelineProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<Set<string>>(
    Set(platforms.map((p) => p.slug)),
  );
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    Set(categories.map((c) => c.slug)),
  );

  const handleFilterChange =
    (mode: "platforms" | "categories") => (value: string[]) => {
      if (!value.length) return;
      if (mode === "platforms")
        setSelectedPlatforms(
          Set(toSlugArray(platforms.filter((p) => value.includes(p.slug)))),
        );
      if (mode === "categories")
        setSelectedCategories(
          Set(toSlugArray(categories.filter((c) => value.includes(c.slug)))),
        );
    };

  function filterRecords(records: TrackerRecord[]) {
    return records
      .filter((r) => selectedPlatforms.has(r.platform.slug))
      .filter((r) => selectedCategories.has(r.category.slug));
  }

  return (
    <div className="w-full max-w-screen-lg md:mx-auto">
      <FilterControl
        label="Filter by Platform"
        selected={selectedPlatforms}
        collection={platforms}
        onChange={handleFilterChange("platforms")}
      />
      <FilterControl
        label="Filter by Category"
        selected={selectedCategories}
        collection={categories}
        onChange={handleFilterChange("categories")}
      />

      <TimelineItem position="start" />

      {Object.entries(timeline).map(([date, records]) => {
        const filteredRecords = filterRecords(records);
        if (!!filteredRecords && !!filteredRecords.length)
          return (
            <TimelineItem key={date} date={date} records={filteredRecords} />
          );
      })}

      <TimelineItem position="end" />
    </div>
  );
}

interface FilterControlProps {
  label: string;
  selected: Set<string>;
  collection: Named[];
  onChange: (selection: string[]) => void;
}

function FilterControl({
  label,
  selected,
  collection,
  onChange,
}: FilterControlProps) {
  return (
    <div>
      <MultiSelect
        label={label}
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
