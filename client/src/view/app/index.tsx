import {useEffect} from 'react'
import AppLayout from '../../layouts/AppLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllHistory } from '../../redux/history/historiesSlice'
import { AppDispatch } from '../../redux'
import { History } from '../../types/history'
import HistoryComponent from '../../components/History'

type Props = {}

function index({}: Props) {
  const {data, loading} = useSelector((state:any)=> state.request_histories)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
      dispatch(getAllHistory())
  }, [])  
  return (
    <AppLayout>
        {loading=="succeeded" ?
            data?.map((item:History)=>{
              return <HistoryComponent key={item.id} data={item}/>
            })
          : <h1>Loading..</h1>
      }
    </AppLayout>
  )
}

export default index