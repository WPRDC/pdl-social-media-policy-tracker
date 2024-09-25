import classNames from "classnames";
import { Category, Platform } from "@/types/model";

export interface HeadingProps {
  platform?: Platform;
  categories: Category[];
  split?: boolean;
}

export function Heading({ platform, categories, split }: HeadingProps) {
  return (
    <div
      className={classNames(
        "items-center rounded-t border-b border-black px-4 py-1 uppercase xl:flex",
        split && "border-b-0",
      )}
      style={{
        backgroundColor: split ? "inherit" : platform?.backgroundColor,
        color: platform?.textColor,
      }}
    >
      {!split && (
        <p className="flex-grow text-xs font-medium">
          <span className="sr-only">Platform:</span>
          {platform?.name}
        </p>
      )}
      <ul
        aria-label="categories"
        className="-ml-1 mt-1 h-full items-center leading-none  xl:-mr-1 xl:ml-0 xl:mt-0"
      >
        {categories.map((category) => (
          <li
            key={category.slug}
            className="mr-1 inline-block w-fit truncate rounded border border-slate-800 px-1 uppercase text-black last:mr-0 "
            style={{ backgroundColor: category?.color }}
          >
            <div className="font-mono text-xs font-bold leading-none">
              {category?.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
