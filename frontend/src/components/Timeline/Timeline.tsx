"use client";

import {
  Category,
  Named,
  Platform,
  type Timeline,
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
  lastUpdated: string;
}

export function Timeline({
  timeline,
  platforms,
  categories,
  lastUpdated,
}: TimelineProps) {
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
    <div className="flex w-full max-w-screen-2xl flex-row-reverse justify-between md:mx-auto">
      {/* Floating Menu */}
      <div className="sticky top-0 h-fit w-64 p-4 ">
        <div className="pl-2 pr-2 font-mono text-sm text-zinc-800">
          <strong className="font-sans text-xs">Last Updated: </strong>{" "}
          {new Date(lastUpdated).toLocaleDateString("en-US", {})}
        </div>

        <div className="border-2 bg-white p-2">
          <FilterControl
            label="Toggle Platforms"
            selected={selectedPlatforms}
            collection={platforms}
            onChange={handleFilterChange("platforms")}
            className="pb-3.5"
          />

          <FilterControl
            label="Toggle Categories"
            selected={selectedCategories}
            collection={categories}
            onChange={handleFilterChange("categories")}
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-screen-lg">
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
    </div>
  );
}

interface FilterControlProps {
  label: string;
  selected: Set<string>;
  collection: Named[];
  onChange: (selection: string[]) => void;
  className?: string;
}

function FilterControl({
  label,
  selected,
  collection,
  onChange,
  className,
}: FilterControlProps) {
  return (
    <div>
      <MultiSelect
        label={label}
        value={Array.from(selected)}
        onChange={onChange}
        className={className}
      >
        {collection.map(({ slug, name }) => (
          <SelectionItem key={slug} value={slug}>
            {name.split("–")[0]}
          </SelectionItem>
        ))}
      </MultiSelect>
    </div>
  );
}

function toSlugArray(things: Iterable<Named>): string[] {
  return Array.from(things).map((t) => t.slug);
}
