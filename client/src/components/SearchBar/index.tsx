import React from 'react'
import Button from '../Button'

type Props = {}

function SearchBar({}: Props) {
  return (
    <div className='flex space-x-4'>
        <input 
        className='w-11/12 border-2 focus:outline-none p-2 rounded-lg'
        type="text" 
        placeholder='Enter the Url' />
        <Button className="w-1/12">Predict</Button>
    </div>
  )
}

export default SearchBar