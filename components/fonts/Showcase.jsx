import React from 'react'

function Showcase({ font }) {
  return (
    <div className="w-3/4" style={{
      fontFamily: font,
    }}>
      <h2 className="mb-6 text-3xl -ml-4 [font-family:inherit]">{font}</h2>
      <div className="w-full flex items-center relative justify-between after:w-[calc(100%+2rem)] after:rounded-md after:h-10 after:border-2 after:border-neutral-700 after:absolute after:left-0 after:top-1/2 after:-translate-x-4 before:absolute before:left-0 before:w-full before:-bottom-10 before:h-4 before:bg-neutral-900 before:z-[30] [font-family:inherit]">
        <div className="w-full flex [font-family:inherit]">
          <div className="flex items-center z-50">
            <div className="bg-neutral-300 text-neutral-900 px-2 h-6 relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-neutral-300 after:-right-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span className="relative z-10 font-['JetbrainsMono_Nerd_Font']"></span>
            </div>
          </div>
          <div className="flex items-center z-40">
            <div className="bg-blue-600 text-neutral-900 px-2 h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-blue-600 after:-right-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center">
              <span
                className="relative z-10 px-4 pt-0.5 inline-block"
                style={{
                  fontFamily: font,
                }}
              >
                <span className="inline-block mr-3 font-['JetbrainsMono_Nerd_Font']">
                  
                </span>
                ~/Desktop/zshyeah
              </span>
            </div>
          </div>
          <div className="flex items-center z-30 [font-family:inherit]">
            <div className="bg-yellow-600 text-neutral-900 px-2 h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-yellow-600 after:-right-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center [font-family:inherit]">
              <span
                className="relative z-10 px-4 pt-0.5 inline-block [font-family:inherit]"
              >
                <span className="inline-flex gap-2 mr-3 font-['JetbrainsMono_Nerd_Font']">
                  <span className="[font-family:inherit]"></span> 
                </span>
                main !6 ?2
              </span>
            </div>
          </div>
        </div>
        <div className="flex [font-family:inherit]">
          <div className="flex items-center z-30 [font-family:inherit]">
            <div className="bg-black text-green-600 px-2 h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-black after:-left-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center [font-family:inherit]">
              <span className="relative z-10 px-4 pt-0.5 inline-block [font-family:inherit]">
                <span
                  className="inline-block mr-3 whitespace-nowrap [font-family:inherit]"
                >
                  ✔
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center z-30 [font-family:inherit]">
            <div className="bg-yellow-600 text-neutral-900 px-2 h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-yellow-600 after:-left-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center [font-family:inherit]">
              <span
                className="relative z-10 px-4 pt-0.5 inline-block whitespace-nowrap [font-family:inherit]"
              >
                1m 27s
                <span className="inline-block mx-3 font-['JetbrainsMono_Nerd_Font']">
                  
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center z-40 [font-family:inherit]">
            <div className="bg-neutral-300 text-neutral-900 px-2 whitespace-nowrap h-6 text-sm relative after:absolute after:w-[17.3px] after:h-[17.3px] after:bg-neutral-300 after:-left-[9px] after:top-1/2 after:rotate-45 after:-translate-y-1/2 after:origin-center [font-family:inherit]">
              <span
                className="relative z-10 px-4 pt-0.5 inline-block [font-family:inherit]"
              >
                05:59:16 pm&nbsp;
                <span className="inline-block font-['JetbrainsMono_Nerd_Font']"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full text-sm mt-4 relative z-[50] ml-4 [font-family:inherit]"
      >
        <span className="text-green-600 [font:inherit]">yarn</span> <span className="text-yellow-600 [font:inherit]">run</span> dev
      </div>
      <div
        className="w-full text-sm mt-2 relative z-[50] -ml-4 leading-6 [font-family:inherit]"
      >
        yarn run v1.22.17<br />
        $ next dev<br />
        <span className="text-yellow-600 [font:inherit]">warn</span>  - Port 3000 is in use, trying 3001 instead.<br />
        <span className="text-green-600 [font:inherit]">ready</span> - started server on 0.0.0.0:3001, url: http://localhost:3001<br />
        <span className="text-blue-600 [font:inherit]">wait</span>  - compiling...<br />
        <span className="text-purple-600 [font:inherit]">event</span> - compiled client and server successfully in 286 ms (124 modules)
      </div>
    </div>
  )
}

export default Showcase