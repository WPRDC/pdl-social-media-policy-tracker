"use client";

import { TrackerRecord } from "@/types/model";
import { ReactElement } from "react";
import { Body } from "@/components/ContentCard/Body";
import { Heading } from "./Heading";
import { GiEvilBook } from "react-icons/gi";
import {
  SiDiscourse,
  SiMeta,
  SiTelegram,
  SiThreads,
  SiTiktok,
  SiWhatsapp,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { IconType } from "react-icons/lib";

export interface ContentCardProps {
  record?: TrackerRecord;
  split?: boolean;
}

export function ContentCard({ record, split }: ContentCardProps): ReactElement {
  const Icon = getIcon(record?.platform.slug ?? "default");

  console.log(record?.platform.slug ?? "default", Icon);

  const dateStr = new Date(record?.date ?? "").toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="relative w-full flex-shrink-0 py-1">
      {!!record && (
        <div className="relative my-3 rounded-md border-2 border-slate-600 bg-slate-100">
          <Heading {...record} />
          <Body {...record} />
          <div className="absolute bottom-2 right-2 font-mono text-xs font-semibold uppercase">
            {dateStr}
          </div>
        </div>
      )}
      {!split && (
        <div className="absolute -left-12 top-0 flex h-full items-center">
          <div className="flex size-8 items-center justify-center rounded-full border-2 border-black bg-white">
            <Icon />
          </div>
        </div>
      )}
    </div>
  );
}

function getIcon(platform: string): IconType {
  const iconMap: Record<string, IconType> = {
    meta: SiMeta,
    threads: SiThreads,
    twitter: SiX,
    tiktok: SiTiktok,
    youtube: SiYoutube,
    telegram: SiTelegram,
    whatsapp: SiWhatsapp,
    gab: GiEvilBook,
    parler: GiEvilBook,
    discourse: SiDiscourse,
    default: GiEvilBook,
  };
  const Icon = iconMap[platform.toLowerCase()];

  if (!Icon) return iconMap["default"];
  return Icon;
}
