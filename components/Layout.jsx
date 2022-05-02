import React from 'react'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className="flex flex-col items-center p-32 bg-neutral-900 text-neutral-300">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout