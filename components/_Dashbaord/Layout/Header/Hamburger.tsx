import { useState } from "react";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center relative">
      <img
        className="w-10 lg:w-6 xl:w-8 2xl:w-10 cursor-pointer"
        src="/Dashboard/Header/hamburger.svg"
        alt="hamburger icon"
        onClick={() => setOpen(!open)}
      />
      <nav
        className={`bg-subheading flex flex-col justify-evenly px-6 fixed left-0 z-50 lg:w-80 lg:text-lg transition-all ${
          open ? "transform-none" : "transform -translate-x-full"
        }`}
        style={{ height: "calc(100vh - 90px)", top: "90px" }}
      >
        <div className="grid gap-4 border-b-4 pb-6">
          <a href="/dashboard/market">Markets</a>
          <a href="/dashboard/equties">Equities</a>
          <a href="/dashboard/options">Options</a>
          <a href="/dashboard/crypto">Crypto</a>
          <a href="/dashboard/futures">Futures</a>
          <a href="/dashboard/portfolio">Portfolio Review</a>
          <a href="/dashboard/notes">Notes Creator</a>
        </div>
        <div className="grid gap-4 border-b-4 pb-6">
          <a href="/support">Documentation / Help</a>
          <a href="/">Financial Literacy / Learning</a>
        </div>
        <div className="grid gap-4">
          <a href="/">Join the Discord</a>
          <a href="/">Feature Request</a>
          <a href="/">Account Settings</a>
          <a href="/api/auth/logout">Log Out</a>
        </div>
        <a className="font-bold text-sm">MML &copy; 2021 All Rights Reserved</a>
      </nav>
    </div>
  );
}
