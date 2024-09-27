import { Set } from "immutable";
import { Named } from "@/types/model";
import { MultiSelect } from "@/components/MultiSelect";
import { SelectionItem } from "@/components/MultiSelect/SelectionItem";
import { Button } from "react-aria-components";
import React from "react";

interface FilterControlProps {
  label: string;
  selected: Set<string>;
  collection: Named[];
  onChange: (selection: string[]) => void;
  className?: string;
}

export function FilterControl({
  label,
  selected,
  collection,
  onChange,
  className,
}: FilterControlProps) {
  const handleSwitchAll = (on: boolean) => () => {
    if (on) {
      onChange(collection.map((item) => item.slug));
    } else {
      onChange([]);
    }
  };

  return (
    <div className="mb-2 flex w-full flex-col items-end pb-1">
      <MultiSelect
        label={label}
        value={Array.from(selected)}
        onChange={onChange}
        className={className}
      >
        {collection.map(({ slug, name }) => (
          <SelectionItem
            key={slug}
            value={slug}
            onFocusPress={(v) => onChange([v])}
          >
            {name.split("–")[0]}
          </SelectionItem>
        ))}
      </MultiSelect>
      <Button
        isDisabled={Array.from(selected).length === collection.length}
        onPress={handleSwitchAll(true)}
        className="ml-1 rounded-sm border-2 border-black px-1 py-0.5 font-mono text-xs font-semibold uppercase outline-none hover:shadow-sm focus-visible:border-2 focus-visible:border-pink-500 focus-visible:shadow-sm disabled:hover:shadow-none"
      >
        Toggle All On
      </Button>
    </div>
  );
}
