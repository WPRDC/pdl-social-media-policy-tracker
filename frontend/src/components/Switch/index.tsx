"use client";

import { useFocusRing, useSwitch, VisuallyHidden } from "react-aria";
import { useRef } from "react";
import { AriaSwitchProps } from "@react-types/switch";
import { useToggleState } from "@/components/client-components";

export function Switch(props: AriaSwitchProps) {
  let state = useToggleState(props);
  let ref = useRef(null);
  let { inputProps } = useSwitch(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        opacity: props.isDisabled ? 0.4 : 1,
      }}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg width={40} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <rect
          x={4}
          y={4}
          width={32}
          height={16}
          rx={8}
          stroke="#111827"
          fill={state.isSelected ? "#67e8f9" : "gray"}
        />
        <circle
          cx={state.isSelected ? 28 : 12}
          cy={12}
          r={5}
          fill={state.isSelected ? "#155e75" : "white"}
        />
        {isFocusVisible && (
          <rect
            x={1}
            y={1}
            width={38}
            height={22}
            rx={11}
            fill="none"
            stroke="#ec4899"
            strokeWidth={2}
          />
        )}
      </svg>
      {props.children}
    </label>
  );
}

<Switch>Low power mode</Switch>;
