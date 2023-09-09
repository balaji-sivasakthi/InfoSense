import React from 'react'
import screenshot from './../../assets/images/dashboard.png'

type Props = {}

function Feature({}: Props) {
  return (
    <div className=' flex  justify-center p-[100px]'>
        <img className='rounded-lg'  height={600} src={screenshot} alt="" />
    </div>
  )
}

export default Feature