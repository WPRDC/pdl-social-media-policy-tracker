import React, { ReactElement } from "react";
import NavMenu from "./NavMenu";
import { requestLastUpdated } from "@/lib/api";
import Image from "next/image";

export default async function Navbar(): Promise<ReactElement> {
  const { lastUpdated } = await requestLastUpdated();

  return (
    <div className="relative w-full border-b ">
      <div className="mb-2 mt-8 text-center font-display text-5xl font-bold">
        Social Media Election Policy Tracker
      </div>
      <div className=" text-center italic">
        A{" "}
        <a
          href="https://cyber.pitt.edu"
          className="font-semibold text-black no-underline"
        >
          Pitt Cyber
        </a>{" "}
        Project
      </div>
      <div className="mx-auto max-w-screen-xl flex-col-reverse justify-between md:flex-row md:items-center">
        <NavMenu />
        {/*<div className="pl-2 pr-2 font-mono text-sm text-zinc-300">*/}
        {/*  <strong>Last Updated: </strong>{" "}*/}
        {/*  {new Date(lastUpdated).toLocaleDateString("en-US", {})}*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
