import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='text-center py-3'>
        2023 InfoSense Made By 💙 <Link to={'https://github.com/balaji-sivasakthi'}>Balaji Sivasakthi</Link>
    </div>
  )
}

export default Footer