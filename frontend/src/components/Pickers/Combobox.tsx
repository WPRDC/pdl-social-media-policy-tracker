"use client";

import { ComboBox, Item } from "@/components/ComboBox";

export interface BackendItem {
  slug: string;
  name: string;
}

export interface ItemPickerProps<T extends BackendItem> {
  items: Iterable<T>;
}

export function ItemPicker<T extends BackendItem>({
  items,
}: ItemPickerProps<T>) {
  return (
    <ComboBox items={items}>
      {(item) => <Item key={item.slug}>{item.name}</Item>}
    </ComboBox>
  );
}
