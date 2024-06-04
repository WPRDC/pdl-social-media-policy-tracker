import Link from "next/link";
import Image from "next/image";

import React, { ReactElement } from "react";
import NavMenu from "./NavMenu";

import logo from "./pitt_logo.png";
import { requestLastUpdated } from "@/lib/api";

export default async function Navbar(): Promise<ReactElement> {
  const { lastUpdated } = await requestLastUpdated();

  return (
    <div className="relative w-full bg-royal bg-navbar-texture bg-cover">
      <div className="mx-auto max-w-screen-xl flex-none p-2">
        <div className="my-2 items-center md:my-4 md:flex md:space-x-4">
          <div className="pr-4 text-left">
            <a href="https://cyber.pitt.edu">
              <Image src={logo} alt="University of Pittsburgh" height={48} />
            </a>
          </div>

          <div className="hidden h-10 border-r border-zinc-300 border-opacity-40 md:block" />

          <Link
            className="mt-4 flex flex-col justify-between font-cooper text-2xl font-semibold leading-none text-white no-underline hover:text-white md:mt-0 md:h-12"
            href={"/"}
          >
            <div className="pb-2 text-sm leading-none md:pb-0">
              Institute for Cyber Law, Policy, and Security
            </div>
            <div className="align-baseline leading-none">
              Social Media Election Policy Tracker
            </div>
          </Link>
        </div>
        <div className="flex-grow" />
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-col-reverse justify-between md:flex-row md:items-center">
        <NavMenu />
        <div className="pl-2 pr-2 font-mono text-sm text-zinc-300">
          <strong>Last Updated: </strong>{" "}
          {new Date(lastUpdated).toLocaleDateString("en-US", {})}
        </div>
      </div>
    </div>
  );
}
