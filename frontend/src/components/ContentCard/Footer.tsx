import classNames from "classnames";
import { Category, Platform, TrackerRecord } from "@/types/model";

export interface FooterProps extends TrackerRecord {}

export function Footer({ category }: FooterProps) {
  return (
    <div className="border-t border-black px-4 pb-2 pt-2">
      <div
        aria-label="category"
        className="flex w-fit items-center rounded border border-slate-800  px-1 font-rubik text-xs font-medium uppercase text-black"
        style={{ backgroundColor: category?.color }}
      >
        {category?.name}
      </div>
    </div>
  );
}
