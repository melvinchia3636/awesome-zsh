import React from 'react'
import Showcase from './Showcase'
import data from "../../data/fonts/data.json";

function PowerLineFonts({ query }) {
  return (
    <>
      {Object.entries(data).filter(([e]) => e.toLowerCase().includes(query.toLowerCase())).map(([k, e]) => (
        <Showcase key={k} font={k} />
      ))}
    </>
  )
}

export default PowerLineFonts