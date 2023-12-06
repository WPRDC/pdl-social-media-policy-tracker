import React, { Key } from "react";

import { Set } from "immutable";
import { BiX } from "react-icons/bi";
import { Named } from "@/types/model";
import { Endpoint } from "@/types/api";
import { ComboBox } from "@/components/ComboBox";
import { Item, useListData } from "@/components/client-components";

interface MultiComboBoxProps<T extends Named> {
  value?: Set<T>;
  setValue: (newValue: Set<T>) => void;
  label?: string;
  endpoint: Endpoint;
  items?: T[];
}

export function MultiComboBox<T extends Named>({
  value = Set(),
  setValue,
  label = "Search for more",
  items,
}: MultiComboBoxProps<T>) {
  const list = useListData({
    initialItems: items,
  });

  /** Update and set the value for the whole field and clean up */
  function handleSelectionChange(selection: Key): void {
    if (!!selection && typeof selection === "string") {
      if (!!value) {
        setValue(value.add(list.getItem(selection)));
      } else {
        setValue(Set([list.getItem(selection)]));
      }

      // clear search form
      list.setFilterText("");
    }
  }

  const handleRemoveValue = (selection: Key) => () => {
    if (!!value && !!selection) {
      const item = value.find((v) => v.slug === selection);
      if (!!item) setValue(value.remove(item));
    }
  };

  return (
    <div>
      {!!value && !!value.size && (
        <ul>
          {Array.from(value || []).map((item) => (
            <li key={`${item.slug}`}>
              <span>{item.name}</span>
              <button onClick={handleRemoveValue(item.slug)}>
                <BiX />
              </button>
            </li>
          ))}
        </ul>
      )}
      {(!value || !value.size) && <span>Nothing selected</span>}

      <ComboBox<T>
        label={label}
        items={list.filterText ? list.items : []}
        inputValue={list.filterText}
        onInputChange={list.setFilterText}
        onSelectionChange={handleSelectionChange}
      >
        {(item) => <Item key={item.slug}>{item.name}</Item>}
      </ComboBox>
    </div>
  );
}
