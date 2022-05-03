import React from 'react'

function Filter({ filter, setFilter, showFilter }) {
  const filterContent = {
    "Serif or Sans": {
      target: "style",
      values: [
        {
          display: "Sans Serif",
          value: "sans",
          font: "jetbrains-mono"
        },
        {
          display: "Serif",
          value: "serif",
          font: "go-mono"
        }
      ]
    },
    "Zero Style": {
      target: "zerostyle",
      values: [
        {
          display: "0",
          value: "dotted",
          font: "jetbrains-mono"
        },
        {
          display: "0",
          value: "slashed",
          font: "borg-sans-mono"
        }
      ]
    },
    "Rendering": {
      target: "rendering",
      values: [
        {
          display: "Vector",
          value: "vector",
          font: "jetbrains-mono"
        },
        {
          display: "Bitmap",
          value: "bitmap",
          font: "fixedsys"
        }
      ]
    },
    "Font Ligatures": {
      target: "ligatures",
      values: [
        {
          display: "=> ==",
          value: true,
          font: "jetbrains-mono"
        },
        {
          display: "=> ==",
          value: false,
          font: "'source-code-pro'"
        }
      ]
    }
  }

  return (
    <div className={`w-3/4 flex flex-col -mt-20 gap-8 overflow-hidden transition-all duration-500 ${showFilter ? "max-h-[32rem]" : "max-h-0 -mb-20"}`}>
      {Object.entries(filterContent).map(([k, { target, values }]) => (
        <div key={k}>
          <h3 className="mb-4">{k}</h3>
          <div className="flex gap-4">
            <button onClick={() => {
              const f = { ...filter };
              f[target] = null;
              setFilter(f);
            }} className={`flex-1 flex items-center justify-center py-4 border-2 transition-all ${filter[target] === null && "font-medium border-orange-400 bg-orange-400 text-neutral-900"}`}>
              All
            </button>
            {values.map(({ display, value, font }) => (
              <button onClick={() => {
                const f = { ...filter };
                f[target] = value;
                setFilter(f);
              }} key={value} className={`flex-1 flex items-center justify-center py-4 border-2 font-[${font}] transition-all ${filter[target] === value && "font-medium border-orange-400 bg-orange-400 text-neutral-900"}`}>
                {display}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Filter