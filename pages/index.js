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
    <div className="flex flex-col items-center p-32 gap-32 bg-neutral5- text-neutral-900">
      {list.map(({ name, link, desc }) => (
        <div key={name} className="flex flex-col w-3/4">
          <h2 className="text-xl mb-2 font-medium">{name}</h2>
          <p className="text-sm text-neutral-400">{desc}</p>
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
                  className="w-full"
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
