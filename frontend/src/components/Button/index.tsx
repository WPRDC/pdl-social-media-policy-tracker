import { AriaButtonProps, useButton } from 'react-aria';
import { RefObject, useRef } from 'react';

interface ButtonProps extends AriaButtonProps {
  className?: string;
  buttonRef?: RefObject<HTMLButtonElement>;
}

export function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, props.buttonRef || ref);
  return (
    <button {...buttonProps} ref={ref} className={props.className}>
      {props.children}
    </button>
  );
}
