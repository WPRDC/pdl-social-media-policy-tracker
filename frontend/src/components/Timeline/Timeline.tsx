"use client";
import {
  Category,
  Named,
  Platform,
  Timeline as ITimeline,
  type Timeline,
  TrackerRecord,
} from "@/types/model";
import { TimelineItem } from "@/components/Timeline/TimelineItem";
import { useMemo, useState } from "react";

import { Set } from "immutable";
import { MultiSelect } from "@/components/MultiSelect";
import { SelectionItem } from "@/components/MultiSelect/SelectionItem";
import { Switch } from "../Switch";

export interface TimelineProps {
  timeline: Timeline;
  platforms: Platform[];
  categories: Category[];
  size?: "S" | "M" | "L";
  lastUpdated: string;
}

export function Timeline({
  timeline: _timeline,
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
  const [hideEmpty, setHideEmpty] = useState<boolean>(false);

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
      .filter(
        (r) =>
          selectedCategories.intersect(Set(r.categories.map((c) => c.slug)))
            .size > 0,
      );
  }

  const timeline = useMemo(() => {
    if (hideEmpty) return _timeline;
    return fillTimeline(_timeline);
  }, [hideEmpty, _timeline]);

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

          <div className="pt-3">
            <Switch
              isSelected={hideEmpty}
              onChange={(v: boolean) => setHideEmpty(v)}
            >
              <div className="font-mono text-sm font-semibold">
                Hide empty months
              </div>
            </Switch>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-screen-lg">
        <TimelineItem position="start" />
        {Object.entries(timeline).map(([date, records]) => {
          const filteredRecords = filterRecords(records);
          if (!!filteredRecords)
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

function fillTimeline(timeline: ITimeline): ITimeline {
  const START = Object.keys(timeline)[Object.keys(timeline).length - 1];
  const START_YEAR = parseInt(START.split("-")[0]);
  const THIS_YEAR = new Date().getFullYear();
  const THIS_MONTH = new Date().getMonth();

  const result: ITimeline = {};

  // iterate to start monthly, monthly
  for (let curYear = THIS_YEAR; curYear >= START_YEAR; curYear--) {
    const endMonth = curYear === THIS_YEAR ? THIS_MONTH : 12; // this month or december
    for (let curMonth = endMonth; curMonth >= 1; curMonth--) {
      const k = `${curYear}-${curMonth}-01`;

      // if this date isn't there, add it
      if (timeline[k]) {
        result[k] = timeline[k];
      } else {
        result[k] = [];
      }
    }
  }

  return result;
}
