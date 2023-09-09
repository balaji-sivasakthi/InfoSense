import React from 'react'

type Props = {
 data:{
  id:string;
  title:string;
  category:string;
 }
}

function History({data}: Props) {
  const {id, title, category} = data
  return (
    <div className='border-2 p-3 mb-2 rounded-sm'>
      <h1 className='text-2xl'>{title}</h1>
      <p className='bg-blue-300 p-2 w-28 text-center'>{category}</p>
    </div>
  )
}

export default History