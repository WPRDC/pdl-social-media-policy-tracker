import { ParserProps } from "@/types/parsing";
import { domToReact } from "html-react-parser";
import { defaultReplace } from "@/components/ParsedHTML/lib";
import classNames from "classnames";

export function ParsedSpan(props: ParserProps) {
  const { style, ...attribs } = props.attribs;
  const replacer = props.replacer ?? defaultReplace;
  return (
    <span className={classNames(props.className)}>
      {domToReact(props.children, { replace: replacer })}
    </span>
  );
}
