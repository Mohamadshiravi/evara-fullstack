"use client";

import { GrLinkTop } from "react-icons/gr";

export default function GoToTopBtn() {
  return (
    <button
      onClick={GoTop}
      className="absolute dark:bg-zinc-600 sm:left-6 sm:top-6 -top-2 left-2 animate-bounce bg-white w-[50px] aspect-square text-2xl flex items-center justify-center rounded-full"
    >
      <GrLinkTop />
    </button>
  );
  function GoTop() {
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.scrollTop = 0;
  }
}
