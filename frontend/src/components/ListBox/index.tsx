"use client";

import * as React from "react";
import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { ListState } from "react-stately";
import type { Node } from "@react-types/shared";
import { useListBox, useListBoxSection, useOption } from "react-aria";
import { HiCheck } from "react-icons/hi";
import classNames from "classnames";

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
}

interface SectionProps {
  section: Node<unknown>;
  state: ListState<unknown>;
}

interface OptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

export function ListBox(props: ListBoxProps) {
  const ref = React.useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      className="w-full overflow-auto outline-none"
    >
      {Array.from(state.collection).map((item) =>
        item.type === "section" ? (
          <ListBoxSection key={item.key} section={item} state={state} />
        ) : (
          <Option key={item.key} item={item} state={state} />
        ),
      )}
    </ul>
  );
}

function ListBoxSection({ section, state }: SectionProps) {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  return (
    <>
      <li {...itemProps} className="pt-2">
        {section.rendered && (
          <span
            {...headingProps}
            className="mx-3 text-xs font-bold uppercase text-gray-500"
          >
            {section.rendered}
          </span>
        )}
        <ul {...groupProps}>
          {Array.from(section.childNodes).map((node) => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}

function Option({ item, state }: OptionProps) {
  const ref = React.useRef<HTMLLIElement>(null);
  const { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref,
  );

  let text = "text-stone-800";
  if (isFocused || isSelected) {
    text = "text-stone-900 font-semibold";
  } else if (isDisabled) {
    text = "text-gray-200";
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      className={classNames(
        "m-1 flex cursor-default items-center justify-between rounded-md px-2 py-1 font-mono font-semibold outline-none focus-visible:bg-stone-200",
        text,
        {
          "font-bold": isSelected,
        },
      )}
    >
      <div className="truncate">{item.rendered}</div>
      <div className="flex-srink-0 size-5">
        {isSelected ? (
          <HiCheck aria-hidden="true" className="size-5 text-pittblue" />
        ) : (
          <div className="size-5"></div>
        )}
      </div>
    </li>
  );
}
