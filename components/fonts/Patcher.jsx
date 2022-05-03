import { Icon } from '@iconify/react'
import React, { useState } from 'react'

function Patcher() {
  const [showCLI, setShowCLI] = useState(false);

  return (
    <>
      <div className="w-3/4 -mt-20 flex items-center gap-8">
        <a href="https://raw.githubusercontent.com/ryanoasis/nerd-fonts/master/font-patcher" target="_blank" rel="noreferrer" className="border-2 border-orange-400 w-72 py-4 text-lg text-orange-400 hover:bg-orange-400 hover:text-neutral-900 transition-all duration-300 text-center">
          Download patcher
        </a>
        <button
          onClick={() => setShowCLI(!showCLI)}
          className="flex items-center gap-2"
        >
          <Icon
            icon="uil:angle-right"
            className={`w-5 h-5 transition-all ${showCLI ? "rotate-90" : "rotate-0"
              }`}
          />
          <span className="underline">Show Font Patcher CLI</span>
        </button>
      </div>
      <code
        className={`bg-[rgb(50,50,50)] w-3/4 block whitespace-pre-wrap px-8 rounded-lg shadow-2xl transition-all duration-500 overflow-hidden -mt-20 ${showCLI ? "max-h-[116rem] py-8" : "max-h-0 py-0"
          }`}
      >
        {`./font-patcher
usage: font-patcher
  [-h] [-v] [-s] [-l] [-q] [-w] [-c] [--careful]
  [--removeligs] [--postprocess [POSTPROCESS]]
  [--configfile [CONFIGFILE]] [--custom [CUSTOM]]
  [-ext [EXTENSION]] [-out [OUTPUTDIR]]
  [--progressbars | --no-progressbars] [--fontawesome]
  [--fontawesomeextension] [--fontlinux] [--octicons]
  [--powersymbols] [--pomicons] [--powerline]
  [--powerlineextra] [--material] [--weather]
  font

  Nerd Fonts Font Patcher: patches a given font with programming and development related glyphs

* Website: https://www.nerdfonts.com
* Version: 2.1.0-alpha
* Development Website: https://github.com/ryanoasis/nerd-fonts
* Changelog: https://github.com/ryanoasis/nerd-fonts/blob/master/changelog.md

positional arguments:
  font                  The path to the font to patch (e.g., Inconsolata.otf)

optional arguments:
  -h, --help            show this help message and exit
  -v, --version         show program's version number and exit
  -s, --mono, --use-single-width-glyphs
                        Whether to generate the glyphs as single-width not double-width (default is double-width)
  -l, --adjust-line-height
                        Whether to adjust line heights (attempt to center powerline separators more evenly)
  -q, --quiet, --shutup
                        Do not generate verbose output
  -w, --windows         Limit the internal font name to 31 characters (for Windows compatibility)
  -c, --complete        Add all available Glyphs
  --careful             Do not overwrite existing glyphs if detected
  --removeligs, --removeligatures
                        Removes ligatures specificed in JSON configuration file
  --postprocess [POSTPROCESS]
                        Specify a Script for Post Processing
  --configfile [CONFIGFILE]
                        Specify a file path for JSON configuration file (see sample: src/config.sample.json)
  --custom [CUSTOM]     Specify a custom symbol font. All new glyphs will be copied, with no scaling applied.
  -ext [EXTENSION], --extension [EXTENSION]
                        Change font file type to create (e.g., ttf, otf)
  -out [OUTPUTDIR], --outputdir [OUTPUTDIR]
                        The directory to output the patched font file to
  --progressbars        Show percentage completion progress bars per Glyph Set
  --no-progressbars     Don't show percentage completion progress bars per Glyph Set

Symbol Fonts:
  --fontawesome         Add Font Awesome Glyphs (http://fontawesome.io/)
  --fontawesomeextension
                        Add Font Awesome Extension Glyphs (https://andrelzgava.github.io/font-awesome-extension/)
  --fontlinux, --fontlogos
                        Add Font Linux and other open source Glyphs (https://github.com/Lukas-W/font-logos)
  --octicons            Add Octicons Glyphs (https://octicons.github.com)
  --powersymbols        Add IEC Power Symbols (https://unicodepowersymbol.com/)
  --pomicons            Add Pomicon Glyphs (https://github.com/gabrielelana/pomicons)
  --powerline           Add Powerline Glyphs
  --powerlineextra      Add Powerline Glyphs (https://github.com/ryanoasis/powerline-extra-symbols)
  --material, --materialdesignicons, --mdi
                        Add Material Design Icons (https://github.com/templarian/MaterialDesign)
  --weather, --weathericons
                        Add Weather Icons (https://github.com/erikflowers/weather-icons)`}
      </code>
    </>
  )
}

export default Patcher