import Head from "next/head";
import React, { useEffect, useState } from "react";
import ReactTyped from "react-typed";

function Page404() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);

  return (
    <>
      <Head>
        <title>404 | awesome-zsh</title>
      </Head>
      <div className="w-full mt-16 flex items-center relative justify-between after:w-[calc(100%+2rem)] after:rounded-md after:h-10 after:border-2 after:border-neutral-700 after:absolute after:left-0 after:top-1/2 after:-translate-x-4 before:absolute before:left-0 before:w-full before:-bottom-10 before:h-4 before:bg-neutral-900 before:z-[30]">
        <div className="w-full flex">
          <div className="flex items-center z-50">
            <div className="bg-neutral-300 text-neutral-900 px-2 h-6 relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-neutral-300 after:-right-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 font-['JetbrainsMono_Nerd_Font']">
                
              </span>
            </div>
          </div>
          <div className="flex items-center z-40">
            <div className="bg-blue-600 text-neutral-900 px-2 h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-blue-600 after:-right-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 px-4 pt-0.5 inline-block">
                <span className="inline-block mr-3 font-['JetbrainsMono_Nerd_Font']">
                  
                </span>
                ~/Desktop/zshyeah
              </span>
            </div>
          </div>
          <div className="flex items-center z-30">
            <div className="bg-yellow-600 text-neutral-900 px-2 h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-yellow-600 after:-right-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 px-4 pt-0.5 inline-block">
                <span className="inline-block mr-3 font-['JetbrainsMono_Nerd_Font']">
                   
                </span>
                main !6 ?2
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center z-30">
            <div className="bg-black text-green-600 px-2 h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-black after:-left-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 px-4 pt-0.5 inline-block">
                <span className="inline-block mr-3 font-['JetbrainsMono_Nerd_Font'] whitespace-nowrap">
                  ✔
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center z-30">
            <div className="bg-yellow-600 text-neutral-900 px-2 h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-yellow-600 after:-left-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 px-4 pt-0.5 inline-block">
                <span className="inline-block mr-3 font-['JetbrainsMono_Nerd_Font'] whitespace-nowrap">
                  1m 27s 
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center z-40">
            <div className="bg-neutral-300 text-neutral-900 px-2 whitespace-nowrap h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-neutral-300 after:-left-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 px-4 pt-0.5 inline-block">
                05:59:16 pm&nbsp;
                <span className="inline-block font-['JetbrainsMono_Nerd_Font']">
                  
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-sm mt-4 relative z-[50] ml-4">
        <span className="text-green-600">cd</span> .{location}
      </div>
      <div className="w-full text-sm mt-2 relative z-[50] -ml-7">
        cd: no such file or directory: .{location}
      </div>
      <div className="mt-8 w-full flex items-center relative justify-between after:w-[calc(100%+2rem)] after:rounded-md after:h-10 after:border-2 after:border-neutral-700 after:absolute after:left-0 after:top-1/2 after:-translate-x-4 before:absolute before:left-0 before:w-full before:-bottom-10 before:h-4 before:bg-neutral-900 before:z-[30]">
        <div className="w-full flex">
          <div className="flex items-center z-50">
            <div className="bg-neutral-300 text-neutral-900 px-2 h-6 relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-neutral-300 after:-right-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 font-['JetbrainsMono_Nerd_Font']">
                
              </span>
            </div>
          </div>
          <div className="flex items-center z-40">
            <div className="bg-blue-600 text-neutral-900 px-2 h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-blue-600 after:-right-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 px-4 pt-0.5 inline-block">
                <span className="inline-block mr-3 font-['JetbrainsMono_Nerd_Font']">
                  
                </span>
                ~/Desktop/zshyeah
              </span>
            </div>
          </div>
          <div className="flex items-center z-30">
            <div className="bg-yellow-600 text-neutral-900 px-2 h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-yellow-600 after:-right-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 px-4 pt-0.5 inline-block">
                <span className="inline-block mr-3 font-['JetbrainsMono_Nerd_Font']">
                   
                </span>
                main !6 ?2
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center z-30">
            <div className="bg-rose-600 text-neutral-300 px-2 h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-rose-600 after:-left-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 px-4 pt-0.5 inline-block">
                <span className="inline-block mr-3 font-['JetbrainsMono_Nerd_Font'] whitespace-nowrap">
                  404 ✘
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center z-40">
            <div className="bg-neutral-300 text-neutral-900 px-2 whitespace-nowrap h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-neutral-300 after:-left-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 px-4 pt-0.5 inline-block">
                05:59:16 pm&nbsp;
                <span className="inline-block font-['JetbrainsMono_Nerd_Font']">
                  
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-sm mt-4 relative z-[50] ml-4">
        <span className="text-green-600">cd</span>{" "}
        <span className="inline-block translate-y-[3px] -ml-2">
          <ReactTyped strings={[""]} cursorChar="▋" />
        </span>
        <span className="text-neutral-600 underline">
          ~/Desktop/zshyeah/home
        </span>
      </div>
    </>
  );
}

export default Page404;
