import { useCheckboxGroupState } from "react-stately";
import { useCheckboxGroup } from "react-aria";
import { CheckboxGroupContext } from "./util";
import { CheckboxGroupProps, CheckboxProps } from "@react-types/checkbox";
import { ReactElement } from "react";

export interface MultiSelectProps extends CheckboxGroupProps {
  children: ReactElement<CheckboxProps> | ReactElement<CheckboxProps>[];
  className?: string;
}

export function MultiSelect(props: MultiSelectProps) {
  const { children, label, className } = props;
  const state = useCheckboxGroupState(props);
  const { groupProps, labelProps } = useCheckboxGroup(props, state);

  return (
    <div {...groupProps} className={className}>
      <div
        {...labelProps}
        className="pb-1 text-xs font-bold uppercase text-slate-900"
      >
        {label}
      </div>
      <div className="grid gap-1 px-1">
        <CheckboxGroupContext.Provider value={state}>
          {children}
        </CheckboxGroupContext.Provider>
      </div>
    </div>
  );
}
