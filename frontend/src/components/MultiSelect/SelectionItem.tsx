"use client";
import { mergeProps, useCheckboxGroupItem, useFocusRing } from "react-aria";
import { AriaCheckboxGroupItemProps } from "@react-types/checkbox";
import { useContext, useRef } from "react";
import { CheckboxGroupContext } from "./util";
import { CheckboxGroupState } from "@react-stately/checkbox";
import classNames from "classnames";
import { BiCheck, BiX } from "react-icons/bi";

export interface SelectionItemProps extends AriaCheckboxGroupItemProps {}

function getDisabledStatus(
  state: CheckboxGroupState,
  props: SelectionItemProps,
  isSelected: boolean,
) {
  if (state.isDisabled) return true;
  else if (props.isDisabled) return true;
  else if (state.value.length == 1 && isSelected) return true;
  return false;
}
export function SelectionItem(props: SelectionItemProps) {
  const { children } = props;
  const state = useContext(CheckboxGroupContext) as CheckboxGroupState;
  const ref = useRef(null);
  const { inputProps } = useCheckboxGroupItem(props, state, ref);

  const isSelected = state?.isSelected(props.value ?? "");
  const isDisabled = getDisabledStatus(state, props, isSelected);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      className={classNames(
        "inline-block cursor-pointer items-center rounded border-2 border-black font-mono text-xs font-bold last-of-type:m-0 hover:shadow-sm active:shadow-sm-inner",
        isSelected ? "bg-cyan-300" : "bg-none",
        isDisabled && "bg-gray-300",
        isFocusVisible ? "border-pink-500 shadow-sm" : "border-black",
      )}
    >
      <label
        className={classNames(
          "block cursor-pointer px-1 py-0.5",
          isDisabled && "cursor-not-allowed",
        )}
      >
        <input
          {...mergeProps(inputProps, focusProps)}
          ref={ref}
          className="sr-only"
          disabled={isDisabled}
        />
        <div className="flex items-center space-x-0.5">
          <div>
            {isSelected ? (
              <BiCheck className="size-3" />
            ) : (
              <BiX className="size-3" />
            )}
          </div>
          <div>{children}</div>
        </div>
      </label>
    </div>
  );
}
