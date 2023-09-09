import React from 'react'

type Props = {
    children: React.ReactNode
}

function HomeLayout({children}: Props) {
  return (
    <div>{children}</div>
  )
}

export default HomeLayout