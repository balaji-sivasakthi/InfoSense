import React from 'react'
import AppLayout from '../../layouts/AppLayout'
import History from '../../components/History'

type Props = {}

function index({}: Props) {
  const recentHistory = [
    {
      id:"1",
      title:"Hello",
      category:"tech",
      url:"https://www.example.com"
    },
    {
      id:"2",
      title:"Hello",
      category:"tech",
      url:"https://www.example.com"
    }
  ]
  return (
    <AppLayout>
        {recentHistory.map(item=>{
          return <History key={item.id} data={item}/>
        })}
    </AppLayout>
  )
}

export default index