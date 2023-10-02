import { ParserProps } from "@/types/parsing";
import { domToReact } from "html-react-parser";
import { defaultReplace } from "@/components/ParsedHTML/lib";
import classNames from "classnames";

export function ParsedOL(props: ParserProps) {
  const { style, ...attribs } = props.attribs;
  const replacer = props.replacer ?? defaultReplace;

  return (
    <ul
      {...attribs}
      className={classNames("list-inside list-decimal", props.className)}
    >
      {domToReact(props.children, { replace: replacer })}
    </ul>
  );
}
