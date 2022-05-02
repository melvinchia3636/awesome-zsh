/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import list from "./data.json";

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

export default function Home({ data }) {
  return (
    <div className="flex items-center flex-col p-32 gap-32 bg-slate-900 text-white">
      {list.map(({ name, link, desc }) => (
        <div key={name} className="w-1/2 flex items-center flex-col">
          <div className="flex flex-col mb-8 gap-2">
            {data
              .filter((e) => {
                return (
                  e[0].split("/")[2].replace(".", "/") ===
                  link.replace("https://github.com/", "")
                );
              })[0]
              ?.map((img) => (
                <img key={img} src={img} alt="" className="w-full" />
              ))}
          </div>
          <h2 className="text-2xl text-sky-400 mb-2">{name}</h2>
          <p className="text-center">{desc}</p>
        </div>
      ))}
    </div>
  );
}
