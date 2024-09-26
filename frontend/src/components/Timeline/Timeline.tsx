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
import React, { useMemo, useRef, useState } from "react";

import { Set } from "immutable";
import { Switch } from "../Switch";
import classNames from "classnames";
import { IoFilter } from "react-icons/io5";

import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";
import { BiX } from "react-icons/bi";
import { TbGitCommit } from "react-icons/tb";
import { FilterControl } from "@/components/filter-control";

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
  const [showEmpty, setShowEmpty] = useState<boolean>(false);

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
    if (!showEmpty) return _timeline;
    return fillTimeline(_timeline);
  }, [showEmpty, _timeline]);

  return (
    <div className="mx-auto w-full max-w-screen-xl bg-green-400 px-1 lg:flex lg:flex-row-reverse lg:justify-between">
      {/* Floating Menu */}
      <DialogTrigger>
        <Button
          aria-label="Show timeline settings menu"
          className="fixed bottom-5 right-5 z-50 flex items-center rounded-sm border-2 border-stone-800 bg-cyan-200 py-1 pl-1.5 pr-2 font-mono text-sm font-semibold uppercase shadow lg:hidden"
        >
          <IoFilter className="mr-1 size-4 text-zinc-800" />
          <div>Filter</div>
        </Button>
        <Modal isDismissable className="px-8 py-16">
          <Dialog className="h-full w-full rounded-md border-2 border-black bg-white p-4">
            {({ close }) => (
              <div>
                <section>
                  <FilterControl
                    label="Toggle Platforms"
                    selected={selectedPlatforms}
                    collection={platforms}
                    className="w-full"
                    onChange={handleFilterChange("platforms")}
                  />

                  <FilterControl
                    label="Toggle Categories"
                    selected={selectedCategories}
                    collection={categories}
                    className="w-full"
                    onChange={handleFilterChange("categories")}
                  />

                  <div className="">
                    <div
                      id="monthswitchlabel"
                      className="font-sans text-xs font-bold uppercase text-zinc-800"
                      aria-hidden="true"
                    >
                      Show empty months
                    </div>
                    <div className="flex items-center">
                      <div className="font-mono text-sm font-medium uppercase">
                        Hide
                      </div>
                      <Switch
                        aria-labelledby="monthswitchlabel"
                        isSelected={showEmpty}
                        onChange={(v: boolean) => setShowEmpty(v)}
                      ></Switch>
                      <div className="font-mono text-sm font-medium uppercase">
                        Show
                      </div>
                    </div>
                  </div>
                </section>
                <div className="mt-1 flex justify-end border-t pt-2">
                  <Button
                    onPress={close}
                    className="flex items-center rounded-sm border-2 border-black pr-1 text-sm font-bold uppercase "
                  >
                    <BiX className="size-5" />
                    <div>Close</div>
                  </Button>
                </div>
              </div>
            )}
          </Dialog>
        </Modal>
      </DialogTrigger>

      <div
        className={classNames(
          "hidden h-fit max-h-full rounded-md border-2 border-black/70 bg-white p-2 shadow-md lg:sticky lg:top-5 lg:mt-5 lg:block",
        )}
      >
        <section id="timeline-menu" aria-label="timeline filter controls">
          <FilterControl
            label="Toggle Platforms"
            selected={selectedPlatforms}
            collection={platforms}
            className="w-full"
            onChange={handleFilterChange("platforms")}
          />
          <FilterControl
            label="Toggle Categories"
            selected={selectedCategories}
            collection={categories}
            className="w-full"
            onChange={handleFilterChange("categories")}
          />
          <div className="">
            <div
              id="monthswitchlabel"
              className="font-sans text-xs font-bold uppercase text-zinc-800"
              aria-hidden="true"
            >
              Show empty months
            </div>
            <div className="flex items-center">
              <div className="font-mono text-sm font-medium uppercase">
                Hide
              </div>
              <Switch
                aria-labelledby="monthswitchlabel"
                isSelected={showEmpty}
                onChange={(v: boolean) => setShowEmpty(v)}
              ></Switch>
              <div className="font-mono text-sm font-medium uppercase">
                Show
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Timeline */}
      <main className="pb-12 pt-4 lg:mx-4 xl:max-w-screen-lg" id="timeline">
        <div className="flex items-start justify-between md:block">
          <h2 className="mb-1 flex items-center font-mono text-xs font-black uppercase text-zinc-500 lg:text-sm">
            <TbGitCommit className="size-4 lg:size-5" aria-hidden />
            <div>Full Timeline</div>
          </h2>
          <div className="mb-5 pl-4 text-xs lg:pl-5">
            <span className="inline-block pr-1 font-mono font-bold uppercase text-zinc-500">
              Last Updated:
            </span>
            <time
              dateTime={lastUpdated}
              className="inline font-mono font-medium text-zinc-500"
            >
              {new Date(lastUpdated).toLocaleDateString("en-US", {})}
            </time>
          </div>
        </div>
        <TimelineItem position="start" />
        {Object.entries(timeline).map(([date, records]) => {
          const filteredRecords = filterRecords(records);
          if (!!filteredRecords && (!!filteredRecords.length || showEmpty))
            return (
              <TimelineItem key={date} date={date} records={filteredRecords} />
            );
        })}
        <TimelineItem position="end" />
      </main>
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

  // first, flatten dates in timeline to make filtering easy

  // iterate to start monthly, monthly
  for (let curYear = THIS_YEAR; curYear >= START_YEAR; curYear--) {
    const endMonth = curYear === THIS_YEAR ? THIS_MONTH : 12; // this month or december
    for (let curMonth = endMonth; curMonth >= 1; curMonth--) {
      const k = `${curYear}-${String(curMonth).padStart(2, "0")}-01`;
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
