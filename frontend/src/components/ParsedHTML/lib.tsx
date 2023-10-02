import React from "react";
import {
  attributesToProps,
  DOMNode,
  domToReact,
  Element,
} from "html-react-parser";
import { JSX } from "react/jsx-runtime";
import { ReplacerRecord } from "@/types/parsing";
import {
  ParsedA,
  ParsedFigcaption,
  ParsedFigure,
  ParsedHeading,
  ParsedOL,
  ParsedP,
  ParsedSpan,
  ParsedUL,
} from "./ParsedComponents";
import IntrinsicElements = JSX.IntrinsicElements;

export const defaultReplacers: ReplacerRecord = {
  figure: ParsedFigure,
  figcaption: ParsedFigcaption,
  a: ParsedA,
  span: ParsedSpan,
  p: ParsedP,
  h1: ParsedHeading,
  h2: ParsedHeading,
  h3: ParsedHeading,
  h4: ParsedHeading,
  h5: ParsedHeading,
  h6: ParsedHeading,
  ul: ParsedUL,
  ol: ParsedOL,
  br: () => <br />,
};

// only show text when making an excerpt of some rich content
export const excerptReplacer: ReplacerRecord = {
  figure: () => <></>,
  figcaption: () => <></>,
  img: () => <></>,
  a: (props) => (
    <ParsedSpan {...props} replacer={makeReplacer(excerptReplacer)}>
      {props.children}
    </ParsedSpan>
  ),
  span: (props) => (
    <ParsedSpan {...props} replacer={makeReplacer(excerptReplacer)}>
      {props.children}
    </ParsedSpan>
  ),
  p: ParsedP,
  h1: ParsedP,
  h2: ParsedP,
  h3: ParsedP,
  h4: ParsedP,
  h5: ParsedP,
  h6: ParsedP,
  ul: ParsedUL,
  ol: ParsedOL,
  br: () => <></>,
};

const HEADING_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];

export const makeReplacer =
  (replacers: ReplacerRecord) => (domNode: DOMNode) => {
    if (domNode instanceof Element) {
      const ReplacedElement =
        replacers[domNode.name as keyof IntrinsicElements];
      if (!!ReplacedElement) {
        return (
          <ReplacedElement {...domNode}>{domNode.children}</ReplacedElement>
        );
      } else {
        const Tag = domNode.name as keyof IntrinsicElements;
        const { style, ...props } = attributesToProps(domNode.attribs);
        return (
          <Tag {...props}>
            {domToReact(domNode.children, { replace: makeReplacer(replacers) })}
          </Tag>
        );
      }
    }
    return;
  };

export const defaultReplace = makeReplacer(defaultReplacers);
