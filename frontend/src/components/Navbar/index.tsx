import Link from "next/link";
import Image from "next/image";

import React, { ReactElement } from "react";
import NavMenu from "./NavMenu";

export default function Navbar(): ReactElement {
  return (
    <div className="w-full bg-royal bg-navbar-texture bg-cover shadow-lg">
      <div className="mx-auto max-w-screen-xl flex-none p-2">
        <div className="flex h-20 items-center space-x-4">
          <div className="pr-4 text-left">
            <Image
              src={"/pitt_logo.png"}
              alt="University of Pittsburgh"
              width={148}
              height={46}
            />
          </div>
          <div className="h-10 border-r border-grey"></div>
          <div className="font-cooper text-2xl font-semibold text-white">
            <Link href={"/"}>Social Media Election Policy Tracker</Link>
          </div>
        </div>
        <div className="flex-grow" />
      </div>
      <NavMenu />
    </div>
  );
}
