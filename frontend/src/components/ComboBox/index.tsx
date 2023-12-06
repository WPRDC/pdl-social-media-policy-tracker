import * as React from "react";
import { useEffect } from "react";

import type { ComboBoxProps } from "@react-types/combobox";

import { BiSearch, BiX } from "react-icons/bi";

import { ListBox } from "@/components/ListBox";
import { Popover } from "@/components/Popover";
import { Button } from "@/components/Button";
import {
  useButton,
  useComboBox,
  useComboBoxState,
  useFilter,
  useSearchField,
  useSearchFieldState,
} from "@/components/client-components";

export function ComboBox<T extends object>(
  props: ComboBoxProps<T> & {
    small?: boolean;
    onAddItem?: (text: string) => void;
  },
) {
  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({ ...props, defaultFilter: contains });

  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const { inputProps, listBoxProps, labelProps } = useComboBox(
    {
      ...props,
      inputRef,
      listBoxRef,
      popoverRef,
    },
    state,
  );

  useEffect(() => {
    if (!!props.items && !!Array.from(props.items).length) {
      state.setOpen(true);
    } else {
      state.setOpen(false);
    }
  }, [props.items]);

  // Get props for the clear button from useSearchField
  const searchProps = {
    label: props.label,
    value: state.inputValue,
    onChange: (v: string) => state.setInputValue(v),
  };

  const searchState = useSearchFieldState(searchProps);
  const { clearButtonProps } = useSearchField(
    searchProps,
    searchState,
    inputRef,
  );
  const clearButtonRef = React.useRef(null);
  const { buttonProps } = useButton(clearButtonProps, clearButtonRef);

  function handleAddItem() {
    if (props.onAddItem) {
      props.onAddItem(state.inputValue);
    }
  }

  return (
    <div>
      {!!props.label && <label htmlFor={inputProps.name}>{props.label}</label>}
      <div>
        <BiSearch aria-hidden="true" />
        <input {...inputProps} ref={inputRef} />
        <button
          {...buttonProps}
          ref={clearButtonRef}
          style={{ visibility: state.inputValue !== "" ? "visible" : "hidden" }}
        >
          <BiX aria-hidden="true" />
        </button>
      </div>
      {(state.isOpen || state.inputValue) && (
        <Popover ref={popoverRef} state={state} triggerRef={inputRef}>
          <ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
          {!!props.onAddItem && (
            <Button onPress={handleAddItem}>
              <b>+</b> Add <i>{state.inputValue}</i>
            </Button>
          )}
        </Popover>
      )}
    </div>
  );
}
