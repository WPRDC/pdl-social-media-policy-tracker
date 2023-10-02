import React, { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import classNames from "classnames";
import { UrlObject } from "url";
import { HiExternalLink } from "react-icons/hi";

export interface AProps extends PropsWithChildren<Omit<LinkProps, "href">> {
  href?: string | (string & UrlObject);
  variant?: "default" | "button" | "unstyled";
  buttonStyle?: "default" | "primary" | "borderless" | "success";
  external?: boolean;
  newTab?: boolean;
  className?: string;
}

export default function A(props: AProps) {
  const {
    href = "",
    children,
    newTab = false,
    external = false,
    className,
    shallow,
    replace,
  } = props;

  const Component: "a" | typeof Link = external ? "a" : Link;
  return (
    <Component
      href={href}
      target={newTab ? "_blank" : ""}
      rel="noreferrer"
      shallow={shallow}
      replace={replace}
    >
      {children}
      {external && <HiExternalLink className="inline-block text-sm" />}
    </Component>
  );
}
