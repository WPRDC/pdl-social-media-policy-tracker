import Link from "next/link";
import Image from "next/image";

import React, { ReactElement } from "react";
import NavMenu from "./NavMenu";

import logo from "./pitt_logo.png";

export default function Navbar(): ReactElement {
  return (
    <div className="w-full bg-royal bg-navbar-texture bg-cover">
      <div className="mx-auto max-w-screen-xl flex-none p-2">
        <div className="flex h-20 items-center space-x-4">
          <div className="pr-4 text-left">
            <Image src={logo} alt="University of Pittsburgh" height={48} />
          </div>
          <div className="h-10 border-r border-grey"></div>
          <div>
            <Link
              className="font-cooper text-2xl font-semibold text-white no-underline hover:text-white"
              href={"/"}
            >
              Social Media Election Policy Tracker
            </Link>
          </div>
        </div>
        <div className="flex-grow" />
      </div>
      <NavMenu />
    </div>
  );
}
