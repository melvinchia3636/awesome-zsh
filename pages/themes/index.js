/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import list from "../data.json";
import fs from "fs";
import Head from "next/head";

export function getStaticProps() {
  const data = fs
    .readdirSync("./public/image")
    .filter((e) => e !== ".DS_Store")
    .map((e) =>
      fs.readdirSync(`./public/image/${e}`).map((f) => `./image/${e}/${f}`)
    );
  return {
    props: {
      data,
    },
  };
}

function Themes({ data }) {
  const [query, setQuery] = useState("");
  return (
    <div className="flex flex-col items-center w-full gap-32">
      <Head>
        <title>Themes | awesome-zsh</title>
      </Head>
      <h1 className="mt-20 text-5xl w-3/4 text-left font-semibold relative after:absolute after:-bottom-4 after:left-0 after:border-b-4 after:border-neutral-100 after:w-16">
        Themes
      </h1>
      <p className="-mt-20 leading-8 w-3/4">
        If you&apos;re using{" "}
        <a className="underline text-orange-400">Antigen</a>, you can test these
        themes in a running ZSH with
        <span className="bg-[rgb(50,50,50)] px-2 py-1 rounded-md text-sm shadow-inner">
          antigen theme githubuser/repo
        </span>
        . If you&apos;re using{" "}
        <a className="underline text-orange-400">zgenom</a>, add them to
        your&nbsp;
        <span className="bg-[rgb(50,50,50)] px-2 py-1 rounded-md text-sm shadow-inner">
          init.zsh
        </span>{" "}
        with{" "}
        <span className="bg-[rgb(50,50,50)] px-2 py-1 rounded-md text-sm shadow-inner">
          zgenom load githubuser/reponame
        </span>
        .
      </p>
      <div className="flex border-2 w-3/4 -mt-20 border-neutral-100 p-4">
        <Icon icon="uil:search" className="w-6 h-6" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent pl-4 focus:outline-none placeholder-neutral-100"
          placeholder="Search themes"
        />
      </div>
      {list
        .filter((e) => (e.name + " " + e.desc).toLowerCase().includes(query))
        .map(({ name, link, desc }) => (
          <div key={name} className="flex flex-col w-3/4">
            <h2 className="text-2xl mb-2 font-medium text-orange-400">
              {name}
            </h2>
            <p className="text-sm">{desc}</p>
            <div className="flex flex-col mt-8 gap-2 w-full">
              {data
                .filter((e) => {
                  return (
                    e[0].split("/")[2].replace(".", "/") ===
                    link.replace("https://github.com/", "")
                  );
                })[0]
                ?.slice(0, 1)
                .filter((e) => !e.endsWith(".DS_Store"))
                .map((img) => (
                  <img
                    key={img}
                    src={img}
                    alt=""
                    className="w-full drop-shadow-2xl"
                  />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Themes;
