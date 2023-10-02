import { HeadingTag, ParserProps } from "@/types/parsing";
import { domToReact } from "html-react-parser";
import { defaultReplace } from "@/components/ParsedHTML/lib";
import classNames from "classnames";

export interface ParsedHeadingProps extends ParserProps {}

export function ParsedHeading(props: ParsedHeadingProps) {
  const { style, ...attribs } = props.attribs;
  const Heading = props.name as HeadingTag;
  const replacers = props.replacer ?? defaultReplace;
  return (
    <Heading
      {...attribs}
      className={classNames(
        "mt-8 font-mono font-semibold text-textSecondary dark:text-textSecondaryDark",
        {
          "text-3xl": Heading === "h1" || Heading === "h2",
          "text-2xl": Heading === "h3",
          "text-xl": Heading === "h4",
          "text-lg": Heading === "h5",
          "text-base": Heading === "h6",
        },
        props.className,
      )}
    >
      {domToReact(props.children, { replace: replacers })}
    </Heading>
  );
}
