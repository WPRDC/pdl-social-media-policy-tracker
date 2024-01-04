import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";

export default function NavMenu(): ReactElement {
  const menuList: ReactNode = (
    <ul className="flex w-full">
      <li className="px-5 py-4 font-sans text-sm font-semibold uppercase text-gold">
        <Link className="text-gold no-underline hover:text-white" href={"/"}>
          About
        </Link>
      </li>
      <li className="px-5 py-4 font-sans text-sm font-semibold uppercase text-gold">
        <Link
          className="text-gold no-underline hover:text-white"
          href={"/timeline"}
        >
          Full Timeline
        </Link>
      </li>
      <li className="px-5 py-4 font-sans text-sm font-semibold uppercase text-gold">
        <Link
          className="text-gold no-underline hover:text-white"
          href={"/compare"}
        >
          Comparison Timeline
        </Link>
      </li>
      <div className="flex-grow" />
    </ul>
  );
  return (
    <div className="container mx-auto flex max-w-screen-lg flex-col justify-between">
      {menuList}
    </div>
  );
}
