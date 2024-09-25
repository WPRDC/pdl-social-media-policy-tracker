import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";
import { TbGitCommit, TbGitCompare } from "react-icons/tb";
export default function NavMenu(): ReactElement {
  const menuList: ReactNode = (
    <ul className="mx-auto mt-2 flex w-full justify-center text-xs md:text-sm lg:mt-0 lg:text-base">
      <li className="px-2 py-1 lg:px-5 lg:py-4">
        <Link
          className="flex items-center font-bold text-slate-800 no-underline hover:text-pittblue"
          href={"/"}
        >
          About
        </Link>
      </li>
      <li className="px-2 py-1 lg:px-5 lg:py-4">
        <Link
          className="flex items-center font-bold text-slate-800 no-underline hover:text-pittblue"
          href={"/timeline"}
        >
          <TbGitCommit className="mr-0.5 size-4" />
          <div>Full Timeline</div>
        </Link>
      </li>
      <li className="px-2 py-1 lg:px-5 lg:py-4">
        <Link
          className="flex items-center font-bold text-slate-800 no-underline hover:text-pittblue"
          href={"/compare"}
        >
          <TbGitCompare className="mr-0.5 size-4" />
          <div>Comparison Timeline</div>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav
      aria-label="site navigation"
      className="container mx-auto flex max-w-screen-lg flex-col justify-between"
    >
      {menuList}
    </nav>
  );
}
