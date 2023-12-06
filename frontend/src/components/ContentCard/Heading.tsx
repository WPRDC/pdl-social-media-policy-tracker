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
        "border-b-1 flex rounded-t-md border-2 border-inherit bg-slate-100 px-4 py-2 text-sm font-bold uppercase",
        split && "border-b-0",
      )}
      style={{
        backgroundColor: split ? "inherit" : platform?.backgroundColor,
        color: platform?.textColor,
      }}
    >
      {!split && <div className="flex-grow">{platform?.name}</div>}
      <div
        aria-label="category"
        className="flex w-fit items-center rounded border border-slate-800 px-1 font-rubik text-xs font-medium uppercase text-black"
        style={{ backgroundColor: category?.color }}
      >
        {category?.name}
      </div>
    </div>
  );
}
