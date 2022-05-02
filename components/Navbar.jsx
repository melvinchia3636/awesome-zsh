import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ReactTyped from 'react-typed';
import "animate.css";

function Navbar() {
  const router = useRouter();
  console.log(router.pathname)
  return (
    <div className="z-[9999] w-full fixed top-0 bg-neutral-900 left-0 p-12 flex items-center justify-between">
      <div className="flex items-center gap-2 font-semibold text-lg animate__animated animate__fadeInLeft">
        <Icon
          icon="ph:terminal-window"
          className="w-8 h-8 stroke-orange-400 stroke-[1.6px] text-orange-500"
        />
        awesome-zsh
        <span className="inline-block mt-1 -ml-3">
          <ReactTyped
            strings={[""]}
            cursorChar="▋"

          />
        </span>
      </div>
      <div className="flex items-center gap-16 text-[0.9rem] font-medium animate__animated animate__fadeInRight">
        {
          [
            ["Home", "/"],
            ["Tutorial", "/tutorial"],
            ["Frameworks", "/frameworks"],
            ["Themes", "/themes"],
            ["Fonts", "/fonts"],
            ["Plugins", "/plugins"],
          ].map(([name, path]) => (
            <Link passHref key={name} href={path}>
              <div className={`relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:border-b-2 after:border-orange-400 after:w-0 ${router.pathname === path && "after:!w-1/2 text-orange-400"} hover:after:w-1/2 after:transition-all cursor-pointer`}>{name}</div>
            </Link>
          ))
        }


        <a className="flex items-center gap-1">
          Other
          <Icon
            icon="uil:angle-down"
            className="w-4 h-4 mt-0.5 stroke-neutral-100"
          />
        </a>

      </div>
    </div>
  )
}

export default Navbar