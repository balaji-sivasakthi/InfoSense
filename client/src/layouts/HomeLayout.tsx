import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

type Props = {
    children: React.ReactNode
}

function HomeLayout({children}: Props) {
  return (
    <div className='px-10 bg-black text-white'>
      <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}

export default HomeLayout