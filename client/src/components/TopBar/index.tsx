import React from 'react'
import SearchBar from '../SearchBar'

type Props = {}

function TopBar({}: Props) {
  return (
    <div className='flex-1 mb-3'>
        <SearchBar/>
    </div>
  )
}

export default TopBar