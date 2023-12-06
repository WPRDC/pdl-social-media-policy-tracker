"use client";

import * as React from "react";
import type { AriaSelectProps } from "@react-types/select";
import { useSelectState } from "react-stately";
import {
  HiddenSelect,
  mergeProps,
  useButton,
  useFocusRing,
  useSelect,
} from "react-aria";
import { HiChevronDoubleDown } from "react-icons/hi";

import { ListBox } from "@/components/ListBox";
import { Popover } from "@/components/Popover";
import classNames from "classnames";

export { Item } from "react-stately";

export function Select<T extends object>(props: AriaSelectProps<T>) {
  const state = useSelectState(props);

  const ref = React.useRef(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref,
  );

  const { buttonProps } = useButton(triggerProps, ref);

  const { focusProps, isFocusVisible, isFocused } = useFocusRing();

  return (
    <div className="relative inline-flex flex-col">
      <div
        {...labelProps}
        className="block cursor-default text-left text-xs font-medium text-gray-700"
      >
        {props.label}
      </div>

      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />

      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={classNames(
          "relative inline-flex flex-row items-center rounded-sm border-b-4 border-transparent outline-none hover:border-black",
          isFocusVisible && "outline outline-pink-500",
        )}
      >
        <span {...valueProps} className="font-rubik text-3xl font-bold">
          {state.selectedItem
            ? state.selectedItem.rendered
            : "Select an option"}
        </span>
        <HiChevronDoubleDown className="h-5 w-5" />
      </button>

      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={ref}
          placement="bottom start"
          className="w-52"
        >
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  );
}
