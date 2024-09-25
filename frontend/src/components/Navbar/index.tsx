import React, { ReactElement } from "react";
import NavMenu from "./NavMenu";
import { requestLastUpdated } from "@/lib/api";

export default async function Navbar(): Promise<ReactElement> {
  const { lastUpdated } = await requestLastUpdated();

  return (
    <header className="relative z-50 w-full border-b border-zinc-700 bg-white shadow-md">
      <h1 className="mb-2 mt-8 text-center font-display text-2xl font-extrabold lg:text-5xl">
        Social Media Election Policy Tracker
      </h1>
      <p className=" text-center italic">
        A{" "}
        <a
          href="https://cyber.pitt.edu"
          className="font-semibold text-black no-underline"
        >
          Pitt Cyber
        </a>{" "}
        Project
      </p>
      <nav
        aria-label="primary navigation"
        className="mx-auto max-w-screen-xl flex-col-reverse justify-between md:flex-row md:items-center"
      >
        <NavMenu />
      </nav>
    </header>
  );
}
