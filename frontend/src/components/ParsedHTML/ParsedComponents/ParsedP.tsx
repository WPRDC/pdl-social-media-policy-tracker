import { ParserProps } from "@/types/parsing";
import { domToReact } from "html-react-parser";
import { defaultReplace } from "@/components/ParsedHTML/lib";
import classNames from "classnames";

export function ParsedP(props: ParserProps) {
  const { style, ...attribs } = props.attribs;
  const replacer = props.replacer ?? defaultReplace;

  return (
    <p
      {...attribs}
      className={classNames("my-1  md:text-justify", props.className)}
    >
      {domToReact(props.children, { replace: replacer })}
    </p>
  );
}
