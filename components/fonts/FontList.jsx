import React from 'react'
import Showcase from './Showcase'
import data from "../../data/fonts/data.json";

function PowerLineFonts({ query, filter }) {
  return (
    <>
      {Object
        .entries(data)
        .filter(([e, p]) =>
          e.toLowerCase().includes(query.toLowerCase()) &&
          Object.entries(filter).every(([k, v]) => {
            return !v || v === p[k]
          })
        ).map(([k, e]) => (
          <Showcase key={k} font={k} />
        ))}
    </>
  )
}

export default PowerLineFonts