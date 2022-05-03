import { Icon } from '@iconify/react'
import React from 'react'

function Search({ query, setQuery, showFilter, setShowFilter }) {
  return (
    <div className="flex border-2 w-3/4 -mt-12 border-neutral-100 p-4">
      <Icon icon="uil:search" className="w-6 h-6" />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 bg-transparent pl-4 focus:outline-none placeholder-neutral-100"
        placeholder="Search fonts"
      />
      <button onClick={() => setShowFilter(!showFilter)}>
        <Icon icon="mdi:filter-outline" className="w-7 h-7" />
      </button>
    </div>
  )
}

export default Search