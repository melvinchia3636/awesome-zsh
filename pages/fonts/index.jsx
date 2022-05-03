/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Head from "next/head";
import FontList from "../../components/fonts/FontList";
import Patcher from "../../components/fonts/Patcher";
import Filter from "../../components/fonts/Filter";
import Search from "../../components/fonts/Search";

function Themes() {
  const [query, setQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({
    style: null,
    zerostyle: null,
    rendering: null,
    ligatures: null
  });

  return (
    <div className="flex flex-col items-center w-full gap-32">
      <Head>
        <title>Themes | awesome-zsh</title>
      </Head>
      <h1 className="mt-20 text-5xl w-3/4 text-left font-semibold relative after:absolute after:-bottom-4 after:left-0 after:border-b-4 after:border-neutral-100 after:w-16">
        Fonts
      </h1>
      <p className="-mt-20 leading-8 w-3/4">
        Here are a list of fonts that you can use for your terminal and your
        code editor. Use the provided FontForge Python Script to patch your own
        patched font.
      </p>
      <Patcher />
      <Search query={query} setQuery={setQuery} showFilter={showFilter} setShowFilter={setShowFilter} />
      <Filter filter={filter} setFilter={setFilter} showFilter={showFilter} />
      <FontList query={query} filter={filter} />
    </div>
  );
}

export default Themes;
