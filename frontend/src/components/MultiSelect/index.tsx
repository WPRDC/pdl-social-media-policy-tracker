import { useCheckboxGroupState } from "react-stately";
import { useCheckboxGroup, useCheckboxGroupItem } from "react-aria";
import { CheckboxGroupContext } from "./util";
import { CheckboxGroupProps, CheckboxProps } from "@react-types/checkbox";
import { ReactElement } from "react";
import classNames from "classnames";

export interface MultiSelectProps extends CheckboxGroupProps {
  children: ReactElement<CheckboxProps> | ReactElement<CheckboxProps>[];
}

export function MultiSelect(props: MultiSelectProps) {
  const { children, label, description } = props;
  const state = useCheckboxGroupState(props);
  const {
    groupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
  } = useCheckboxGroup(props, state);

  return (
    <div {...groupProps} className="py-2">
      <div
        {...labelProps}
        className="font-mono text-sm font-bold uppercase text-slate-800"
      >
        {label}
      </div>
      <div>
        <CheckboxGroupContext.Provider value={state}>
          {children}
        </CheckboxGroupContext.Provider>
      </div>
    </div>
  );
}
