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
        "mb-2 mr-2 inline-block cursor-pointer items-center rounded-lg border-2 border-black text-xs font-semibold last-of-type:m-0 hover:shadow-sm active:shadow-sm-inner",
        isSelected ? "bg-skyblue" : "bg-none",
        isDisabled && "bg-gray-300",
        isFocusVisible ? "border-pink-500 shadow-sm" : "border-black",
      )}
    >
      <label
        className={classNames(
          "block cursor-pointer px-2 py-1",
          isDisabled && "cursor-not-allowed",
        )}
      >
        <input
          {...mergeProps(inputProps, focusProps)}
          ref={ref}
          className="sr-only"
          disabled={isDisabled}
        />
        <div className="flex items-center space-x-1">
          <div>
            {isSelected ? (
              <BiCheck className="h-4 w-4" />
            ) : (
              <BiX className="h-4 w-4" />
            )}
          </div>
          <div>{children}</div>
        </div>
      </label>
    </div>
  );
}
