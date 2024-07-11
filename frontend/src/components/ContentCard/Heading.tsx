import classNames from "classnames";
import { Category, Platform } from "@/types/model";

export interface HeadingProps {
  platform?: Platform;
  category?: Category;
  split?: boolean;
}

export function Heading({ platform, category, split }: HeadingProps) {
  return (
    <div
      className={classNames(
        "border-b-1 flex items-center rounded-t bg-slate-100 px-4 py-1 text-xs font-bold uppercase",
        split && "border-b-0",
      )}
      style={{
        backgroundColor: split ? "inherit" : platform?.backgroundColor,
        color: platform?.textColor,
      }}
    >
      {!split && <div className="flex-grow text-xs">{platform?.name}</div>}

      <div
        aria-label="category"
        className="w-fit rounded border border-slate-800 px-1 font-mono text-xs font-black uppercase text-slate-800"
        style={{ backgroundColor: category?.color }}
      >
        {category?.name}
      </div>
    </div>
  );
}
