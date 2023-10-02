import type { MenuTriggerProps } from 'react-stately';
import { useMenuTriggerState } from 'react-stately';
import { useMenuTrigger } from 'react-aria';

// Reuse the Popover, and Button from your component library. See below for details.
import { ReactNode, useRef } from 'react';
import { Popover } from '../Popover';
import { Button } from '../Button';

export interface MenuButtonProps<T> extends MenuTriggerProps {
  label?: string;
  children: ReactNode;
}

export function MenuButton<T extends object>(props: MenuButtonProps<T>) {
  // Create state based on the incoming props
  const state = useMenuTriggerState(props);

  // Get props for the button and menu elements
  const ref = useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);

  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Button {...menuTriggerProps} buttonRef={ref}>
        {props.label}
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          ▼
        </span>
      </Button>
      {state.isOpen && (
        <Popover>
          <div onClick={state.close}>{props.children}</div>
        </Popover>
      )}
    </>
  );
}
