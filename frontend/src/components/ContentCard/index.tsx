"use client";

import { TrackerRecord } from "@/types/model";
import { ReactElement, useState } from "react";
import { ParsedHTML } from "@/components/ParsedHTML";
import Link from "next/link";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import classNames from "classnames";
import { Heading } from "@/components/ContentCard/Heading";
import { Body } from "@/components/ContentCard/Body";
import { Footer } from "./Footer";

export interface ContentCardProps {
  record?: TrackerRecord;
  split?: boolean;
}

export function ContentCard({
  record,
  split = false,
}: ContentCardProps): ReactElement {
  return (
    <div className="w-full flex-shrink-0 py-1">
      {!!record && (
        <div className="my-3 rounded-md border-2 border-slate-600 bg-slate-100 shadow shadow-slate-400">
          {/*<Heading {...record} split={split} />*/}
          <Body {...record} />
          <Footer {...record} />
        </div>
      )}
    </div>
  );
}
