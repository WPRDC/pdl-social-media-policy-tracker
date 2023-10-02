import { ParserProps } from "@/types/parsing";
import { domToReact } from "html-react-parser";
import classNames from "classnames";
import { defaultReplace } from "@/components/ParsedHTML/lib";

export function ParsedLI(props: ParserProps) {
  const { style, ...attribs } = props.attribs;
  const replacer = props.replacer ?? defaultReplace;

  return (
    <li className={classNames(props.className)}>
      {domToReact(props.children, { replace: defaultReplace })}
    </li>
  );
}
