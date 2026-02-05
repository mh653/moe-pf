'use client'

import Top from "./components/sections/Top";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Works from "./components/sections/Works";
import Like from "./components/sections/Like";

export default function Home() {
  return (
      <main className="text-xs leading-6 2xl:text-sm overflow-hidden">
        <Top />
        <About />
        <Skills />
        <Works />
        <Like />
      </main>
  );
}
