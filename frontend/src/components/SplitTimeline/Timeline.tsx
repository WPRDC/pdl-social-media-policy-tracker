"use client";

import React, { Key, useState } from "react";
import {
  Category,
  Platform,
  type Timeline,
  TrackerRecord,
} from "@/types/model";
import { Set } from "immutable";

import { TimelineItem } from "./TimelineItem";
import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";
import { IoFilter } from "react-icons/io5";
import { FilterControl } from "@/components/filter-control";
import { BiX } from "react-icons/bi";
import { TbGitCommit } from "react-icons/tb";

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
  const [timelinePlatforms, setTimelinePlatforms] = useState<Platform[]>([
    platforms[4],
    platforms[0],
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
      .filter(
        (r) =>
          selectedCategories.intersect(Set(r.categories.map((c) => c.slug)))
            .size > 0,
      )
      .filter((r) =>
        timelinePlatforms.map((p) => p.slug).includes(r.platform.slug),
      );
  }

  return (
    <div className="w-fit lg:mx-auto">
      <div className="flex items-start justify-between pl-1 pr-1 pt-4 md:px-0 lg:block lg:w-auto">
        <h2 className="mb-1 flex items-center font-mono text-xs font-black uppercase text-zinc-500 lg:text-sm">
          <TbGitCommit className="size-4 lg:size-5" aria-hidden />
          <div>Comparison Timeline</div>
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

      <DialogTrigger>
        <Button
          aria-label="Show timeline settings menu"
          className="fixed bottom-5 right-5 z-50 flex items-center rounded-sm border-2 border-stone-800 bg-cyan-200 py-1 pl-1.5 pr-2 font-mono text-sm font-semibold uppercase shadow"
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
                    label="Toggle Categories"
                    selected={selectedCategories}
                    collection={categories}
                    className="w-full"
                    onChange={(v) => setSelectedCategories(Set(v))}
                  />
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
      <main>
        <TimelineItem
          position="start"
          platforms={platforms}
          onPlatformSelect={handlePlatformSelection}
          timelinePlatforms={timelinePlatforms}
        />
        {Object.entries(timeline).map(([date, records]) => {
          const filteredRecords = filterRecords(records);
          if (!!filteredRecords)
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
      </main>
    </div>
  );
}
