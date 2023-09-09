import React from 'react'

type Props = {
    children: React.ReactNode
}

function HomeLayout({children}: Props) {
  return (
    <div className='px-10 h-screen text-white bg-[#000000]'>{children}</div>
  )
}

export default HomeLayout