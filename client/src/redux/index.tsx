import { configureStore } from '@reduxjs/toolkit'
import historySlice from './history/historiesSlice'
import loadingSlice from './loader/loaderSlice'

export const store = configureStore({
  devTools:true,
  reducer: {
    loading           : loadingSlice,
    request_histories : historySlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch