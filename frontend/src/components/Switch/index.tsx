"use client";

import { useFocusRing, useHover, useSwitch, VisuallyHidden } from "react-aria";
import { useRef, useState } from "react";
import { AriaSwitchProps } from "@react-types/switch";
import { useToggleState } from "@/components/client-components";

export function Switch(props: AriaSwitchProps) {
  let state = useToggleState(props);
  let ref = useRef(null);
  let { inputProps } = useSwitch(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  let { hoverProps, isHovered } = useHover({});

  return (
    <label
      {...hoverProps}
      className="group cursor-pointer"
      style={{
        display: "flex",
        alignItems: "center",
        opacity: props.isDisabled ? 0.4 : 1,
      }}
    >
      {props.children}

      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg width={40} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <rect
          x={4}
          y={4}
          strokeWidth={isHovered ? 2 : 1}
          width={32}
          height={16}
          rx={8}
          stroke="#111827"
          fill={state.isSelected ? "#cffafe" : "gray"}
        />
        <circle
          cx={state.isSelected ? 28 : 12}
          cy={12}
          r={5}
          fill={state.isSelected ? "#0e7490" : "white"}
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
    </label>
  );
}

<Switch>Low power mode</Switch>;
