import React from 'react'
import AppLayout from '../../layouts/AppLayout'
import History from '../../components/History'

type Props = {}

function index({}: Props) {
  const recentHistory = [
    {
      id:"1",
      title:"On 1st visit as President, Joe Biden backs India for permanent UNSC seat",
      category:"tech",
      url:"https://www.example.com"
    },
    {
      id:"2",
      title:"Gadar 2 to beat Baahubali 2- The Conclusion: Will becomes second highest grossing film in Hindi",
      category:"Entertainment",
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