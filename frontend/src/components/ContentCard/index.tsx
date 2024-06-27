"use client";

import { TrackerRecord } from "@/types/model";
import { ReactElement } from "react";
import { Body } from "@/components/ContentCard/Body";
import { Footer } from "./Footer";
import { Heading } from "./Heading";

export interface ContentCardProps {
  record?: TrackerRecord;
  split?: boolean;
}

export function ContentCard({ record }: ContentCardProps): ReactElement {
  return (
    <div className="w-full flex-shrink-0 py-1">
      {!!record && (
        <div className="my-3 rounded-md border-2 border-slate-600 bg-slate-100">
          <Heading {...record} />
          <Body {...record} />
          <Footer {...record} />
        </div>
      )}
    </div>
  );
}
