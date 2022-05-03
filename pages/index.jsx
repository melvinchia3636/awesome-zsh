/* eslint-disable @next/next/no-img-element */
import "animate.css";
import Typed from "react-typed";
import "animate.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | awesome-zsh</title>
      </Head>
      <h1 className="animate__animated animate__fadeInUp text-5xl text-center mt-16 font-semibold text-orange-400">
        <Typed
          strings={["Spice up your terminal", "Make it look 10x cooler"]}
          typeSpeed={60}
          backSpeed={60}
          cursorChar="▋"
          backDelay={1500}
          startDelay={500}
        />
      </h1>
      <p className="animate__animated animate__fadeInUp w-full mt-6 text-center leading-7 [animation-delay:0.5s]">
        A collection of ZSH frameworks, plugins, tutorials & themes inspired by
        the various awesome list collections out there.
      </p>
      <button className="animate__animated animate__fadeInUp [animation-delay:1s] border-2 border-orange-400 w-64 py-4 text-xl text-orange-400 hover:bg-orange-400 hover:text-neutral-900 transition-all duration-300 mt-8">
        Read more
      </button>
      <img
        src="/hero.svg"
        alt=""
        className="w-full mt-16 rounded-xl shadow-2xl animate__animated animate__fadeInUp [animation-delay:1s] "
      />
      <div className="mt-24 w-full text-sm flex items-center justify-between -mb-20">
        <div>Project under MIT License. Made with 🧡 by Melvin Chia.</div>
        <div className="flex items-center divide-x-2 divide-neutral-600">
          <a className="px-2 hover:underline decoration-[1.6px]">Source code</a>
          <a className="px-2 hover:underline decoration-[1.6px]">Credits</a>
          <a className="px-2 hover:underline decoration-[1.6px]">
            Buy me a ☕️
          </a>
        </div>
      </div>
    </>
  );
}
