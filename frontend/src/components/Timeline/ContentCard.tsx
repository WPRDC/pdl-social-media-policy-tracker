"use client";

import { TrackerRecord } from "@/types/model";
import { ReactElement, useState } from "react";
import { ParsedHTML } from "@/components/ParsedHTML";
import Link from "next/link";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export interface ContentCardProps {
  record?: TrackerRecord;
}

export function ContentCard({ record }: ContentCardProps): ReactElement {
  const { category, platform, summary, details, citations = [] } = record || {};

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex-shrink-0 py-1">
      {!!record && (
        <div className="my-3 rounded-md border-slate-600 bg-slate-100 shadow shadow-slate-400">
          <div
            className={
              "border-b-1 flex rounded-t-lg border-2 border-inherit px-4 py-2 text-sm font-bold uppercase"
            }
            style={{
              backgroundColor: platform?.backgroundColor,
              color: platform?.textColor,
            }}
          >
            <div className="flex-grow">{platform?.name}</div>
            <div
              aria-label="category"
              className="flex w-fit items-center rounded border border-slate-800 px-1 font-rubik text-xs font-medium uppercase text-black"
              style={{ backgroundColor: category?.color }}
            >
              {category?.name}
            </div>
          </div>
          <div className="rounded-b-md border-2 border-t-0 border-inherit px-4 py-2  ">
            {/* Summary */}
            <div className="mb-2 font-rubik text-base font-semibold">
              {summary}
            </div>
            {/* Citations */}
            <div>
              <div className="mt-2 font-sans text-xs font-bold uppercase text-stone-600">
                Source{citations.length > 1 ? "s" : ""}
              </div>
              {citations.map((citation) => (
                <div className="w-full overflow-x-auto" key={citation}>
                  <Link
                    href={citation}
                    className="line-clamp-1 break-words font-mono text-sm text-blue-800 underline hover:text-blue-500"
                  >
                    {new URL(citation).hostname}
                  </Link>
                </div>
              ))}
            </div>
            {/* Show More*/}
            {!!details && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="mt-4 font-mono font-black leading-tight underline decoration-2 hover:text-stone-600"
              >
                {isOpen ? (
                  <div className="flex items-center pr-1">
                    <div className="inline-block text-xs uppercase">
                      Hide Details
                    </div>
                    <BiChevronUp className="text inline-block font-bold" />
                  </div>
                ) : (
                  <div className="flex items-center pr-1">
                    <div className="inline-block text-xs uppercase">
                      Show Details
                    </div>
                    <BiChevronDown className="text inline-block font-bold" />
                  </div>
                )}
              </button>
            )}
            {/* Details */}
            <div
              className={`${
                isOpen ? "max-h-96" : "max-h-0 "
              } overflow-hidden transition-[max-height] duration-200 `}
            >
              {!!details && (
                <div className="pb-2 pt-1">
                  <ParsedHTML className="text font-medium">
                    {details}
                  </ParsedHTML>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
