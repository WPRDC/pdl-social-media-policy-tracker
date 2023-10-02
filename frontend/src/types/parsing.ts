import { DOMNode, Element } from "html-react-parser";
import { JSX } from "react/jsx-runtime";

export interface ParserProps
  extends Pick<Element, "name" | "attribs" | "type" | "children"> {
  className?: string;
  replacer?: ReplaceFn;
}

export type ReplaceFn = (node: DOMNode) => JSX.Element | undefined;
export type Replacer = (props: ParserProps) => JSX.Element;
export type ReplacerRecord = Partial<
  Record<keyof JSX.IntrinsicElements, Replacer>
>;

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
