import React, { ReactElement } from 'react'
import SideBar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import { useLocation } from 'react-router-dom'

type Props = {
  children:React.ReactNode
}

function AppLayout({children}: Props) {
  const {pathname}= useLocation()
  return (
    <div className='flex'>
      <SideBar/>
        <main className='flex-1 p-3'>
        {pathname=="/app/dashboard" && <TopBar />}
          <div className='min-h-screen rounded-lg border-2 p-3'>
            {children}
          </div>
        </main>
    </div>
  )
}

export default AppLayout