import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";

export default function NavMenu(): ReactElement {
  const menuList: ReactNode = (
    <ul className="flex w-full">
      <li className="border-r border-gray-400 px-5 py-4 font-sans text-sm font-semibold uppercase text-gold">
        <Link href={"/"}>Timeline</Link>
      </li>
      <li className="border-r border-gray-400 px-5 py-4 font-sans text-sm font-semibold uppercase text-gold">
        <Link href={"/compare"}>Compare</Link>
      </li>
      <li className="border-r border-gray-400 px-5 py-4 font-sans text-sm font-semibold uppercase text-gold">
        <Link href={"/about"}>About</Link>
      </li>
      <li className="px-5 py-4 font-sans text-sm font-semibold uppercase text-gold">
        <Link href={"/help"}>FAQ</Link>
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
