import React from 'react'

export default function Search({ handleSearchNote }) {
  return (
    <div className='search'>
      <i class="bi bi-search"></i>
      <input onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder="Type to search..." />
      </div>
  )
}
