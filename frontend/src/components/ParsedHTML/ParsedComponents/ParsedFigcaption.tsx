import { ParserProps } from "@/types/parsing";
import { attributesToProps, domToReact } from "html-react-parser";
import { defaultReplace } from "../lib";
import classNames from "classnames";

export interface ParsedFigcaptionProps extends ParserProps {}

export function ParsedFigcaption(props: ParserProps) {
  const { style, ...attribs } = props.attribs;
  const replacer = props.replacer ?? defaultReplace;

  return (
    <figcaption
      {...attributesToProps(attribs)}
      className={classNames(
        "max-w-2xl py-0.5 text-center font-mono text-sm italic text-textSecondary dark:text-textSecondaryDark",
        props.className,
      )}
    >
      {domToReact(props.children, { replace: replacer })}
    </figcaption>
  );
}
