import { TrackerRecord } from "@/types/model";
import Link from "next/link";
import { ParsedHTML } from "@/components/ParsedHTML";
import { ReactNode, useState } from "react";

export interface BodyProps extends TrackerRecord {}

export function Body({ summary, citations, details, category }: BodyProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="px-4 py-2">
      {/* Summary */}
      <div className="mb-2 font-rubik text-lg font-semibold">{summary}</div>

      {/* Details */}
      {!!details && (
        <div className="pb-2 ">
          <ParsedHTML className="text-sm leading-normal">{details}</ParsedHTML>
        </div>
      )}

      {/* Citations */}
      <div>
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
    </div>
  );
}

interface SectionHeaderProps {
  children?: ReactNode;
}

function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="mt-3 font-mono text-xs font-bold uppercase text-textSecondary">
      {children}
    </div>
  );
}
