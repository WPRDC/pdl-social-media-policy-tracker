import { TrackerRecord } from "@/types/model";
import Link from "next/link";
import { ParsedHTML } from "@/components/ParsedHTML";
import { ReactNode, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export interface BodyProps extends TrackerRecord {}

export function Body({ summary, citations, details, category }: BodyProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="px-4 py-2">
      {/* Summary */}
      <div className="mb-2 font-rubik text-lg font-semibold">{summary}</div>

      {/* Citations */}
      <div>
        <div className="mt-2 font-sans text-xs font-bold uppercase text-stone-600">
          Source{citations.length === 1 ? "" : "s"}
        </div>
        {citations.map((citation) => (
          <div className="items-baseline overflow-x-auto" key={citation}>
            <Link
              href={citation}
              target="_blank"
              className="line-clamp-1 flex w-fit break-words pb-0.5 font-mono text-sm text-blue-800 underline hover:text-blue-500"
            >
              <span>{new URL(citation).hostname}</span>
              <TbExternalLink />
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
              <div className="inline-block text-xs uppercase">Hide Details</div>
              <BiChevronUp className="text inline-block font-bold" />
            </div>
          ) : (
            <div className="flex items-center pr-1">
              <div className="inline-block text-xs uppercase">Show Details</div>
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
            <ParsedHTML className="text font-medium">{details}</ParsedHTML>
          </div>
        )}
      </div>
    </div>
  );
}
