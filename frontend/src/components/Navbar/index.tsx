import Link from "next/link";
import Image from "next/image";

import React, { ReactElement } from "react";
import NavMenu from "./NavMenu";

import logo from "./pitt_logo.png";

export default function Navbar(): ReactElement {
  return (
    <div className="w-full bg-royal bg-navbar-texture bg-cover">
      <div className="mx-auto max-w-screen-xl flex-none p-2">
        <div className="my-2 items-end md:my-4 md:flex md:space-x-4">
          <div className="pr-4 text-left">
            <Image src={logo} alt="University of Pittsburgh" height={48} />
          </div>

          <div className="hidden h-10 border-r border-zinc-300 border-opacity-40 md:block" />

          <Link
            className="mt-4 flex flex-col justify-between font-cooper text-2xl font-semibold leading-none text-white no-underline hover:text-white md:mt-0 md:h-12"
            href={"/"}
          >
            <div className="text-sm">
              Institute for Cyber Law, Policy, and Security
            </div>
            <div>Social Media Election Policy Tracker</div>
          </Link>
        </div>
        <div className="flex-grow" />
      </div>
      <NavMenu />
    </div>
  );
}
