"use client";
import { mergeProps, useCheckboxGroupItem, useFocusRing } from "react-aria";
import { AriaCheckboxGroupItemProps } from "@react-types/checkbox";
import { useContext, useRef } from "react";
import { CheckboxGroupContext } from "./util";
import { CheckboxGroupState } from "@react-stately/checkbox";
import classNames from "classnames";
import { BiCheck, BiX } from "react-icons/bi";
import { Button } from "react-aria-components";

export interface SelectionItemProps extends AriaCheckboxGroupItemProps {
  onFocusPress: (v: string) => void;
}

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
    <div className="flex w-full items-center font-mono  text-xs font-semibold uppercase">
      <label
        className={classNames(
          "flex w-full items-center rounded-sm border-2 px-1 py-0.5 ",
          isDisabled
            ? "cursor-default hover:shadow-none"
            : "cursor-pointer hover:shadow-sm",
          isSelected ? "bg-cyan-100" : "bg-white",
          isFocusVisible ? "border-pink-500 shadow-sm" : "border-black",
        )}
      >
        <div className="pr-0.5" aria-hidden>
          {isSelected ? (
            <BiCheck className="size-4" />
          ) : (
            <BiX className="size-4" />
          )}
        </div>

        <div
          className={classNames("flex-grow truncate")}
          title={children ? String(children) : undefined}
        >
          {children}
        </div>

        <input
          {...mergeProps(inputProps, focusProps)}
          ref={ref}
          className="sr-only"
          disabled={isDisabled}
        />
      </label>

      <Button
        className={classNames(
          "ml-1 rounded-sm border-2 border-black px-1 font-mono text-xs uppercase outline-none",
          "py-0.5 hover:shadow-sm focus-visible:border-pink-500 focus-visible:shadow-sm",
        )}
        onPress={() => props.onFocusPress(props.value)}
      >
        Focus
      </Button>
    </div>
  );
}
