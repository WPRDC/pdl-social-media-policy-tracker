"use client";

import { TrackerRecord } from "@/types/model";
import React, { ReactElement } from "react";
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
import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";
import { ParsedHTML } from "@/components/ParsedHTML";
import { BiChevronDown, BiChevronUp, BiX } from "react-icons/bi";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

export interface ContentCardProps {
  record?: TrackerRecord;
  split?: boolean;
}

export function ContentCard({ record, split }: ContentCardProps): ReactElement {
  const Icon = getIcon(record?.platform.slug ?? "default");

  const dateStr = new Date(record?.date ?? "").toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="relative mt-3 w-full">
      {!split && (
        <div className="absolute -left-11 top-0 flex h-full items-center md:-left-12">
          <div className="flex size-8 items-center justify-center rounded-full border-2 border-slate-600 bg-white">
            <Icon aria-hidden />
          </div>
        </div>
      )}

      {!!record && (
        <article className="relative mb-4 rounded-md border-2 border-slate-600 bg-white">
          <div className="flex flex-col-reverse">
            {/* Summary */}
            <h4 className="leading-nonw mb-4 px-2 pt-2 font-sans text-sm font-semibold md:px-4 md:text-base lg:text-lg xl:text-xl">
              {record.summary}
            </h4>
            <Heading {...record} split={split} />
          </div>

          {/* Citations */}
          <div className="px-2 md:px-4">
            <div className="flex items-center font-mono text-sm font-bold uppercase text-stone-800 lg:mt-2">
              Sources:
            </div>
            <ul className="list-inside lg:list-disc lg:pl-2">
              {record.citations.map((citation) => (
                <li className="overflow-x-auto" key={citation}>
                  <Link
                    href={citation}
                    target="_blank"
                    className="inline-flex w-fit truncate text-sm text-blue-800 underline hover:text-blue-500 lg:-ml-1.5"
                  >
                    <div className="max-w-40 truncate lg:max-w-none ">
                      {new URL(citation).hostname}
                    </div>
                    <TbExternalLink />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div className="px-2 md:px-4">
            <div className="lg:hidden">
              <DialogTrigger>
                <Button className="mb-2 mt-4 rounded-sm border-2 border-black bg-cyan-200 px-1 font-mono text-sm font-bold uppercase">
                  See Details
                </Button>
                <Modal className="px-8 py-16" isDismissable>
                  <Dialog className=" h-full rounded-md border-2 border-black bg-white p-8">
                    {({ close }) => (
                      <div className="">
                        <div className="overflow-auto">
                          {!!record.details && (
                            <ParsedHTML className="text-sm font-medium leading-relaxed">
                              {record.details}
                            </ParsedHTML>
                          )}
                        </div>
                        <div className="mt-4 flex justify-end border-t pt-4">
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
            </div>
            {!!record.details && (
              <details className="group mb-4 hidden lg:block">
                <summary className="mt-4 cursor-pointer py-2 font-mono font-bold uppercase leading-tight text-stone-800 underline decoration-2 hover:text-stone-600 lg:block lg:py-0 lg:text-sm">
                  <span className="hidden group-open:inline">Hide</span>
                  <span className="inline group-open:hidden">Show</span>

                  <span> Details</span>
                </summary>
                <ParsedHTML className="pb-1 text-base font-medium leading-relaxed">
                  {record.details}
                </ParsedHTML>
              </details>
            )}
          </div>
        </article>
      )}

      {/*<div className="absolute bottom-4 right-4 font-mono text-xs font-semibold uppercase text-zinc-500 lg:bottom-2">*/}
      {/*  {dateStr}*/}
      {/*</div>*/}
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
