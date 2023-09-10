import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  ApiFactory  from "../../api/factory";
import { type History } from "../../types/history";

const _History = ApiFactory.create(ApiFactory.history);

export interface HistoryState {
  data: History[]
  loading: 'pending' | 'succeeded' | 'failed'
}

export const getAllHistory = createAsyncThunk(
  "history/getAllHistroy",
  async () => {
    return await _History?.getAllHistory()
  }
  );
  
  let initialState:HistoryState = {
    data:[],
    loading:'pending'
  }
  export const historySlice = createSlice({
    name: "history",
    initialState:initialState,
    reducers:{},
    extraReducers: (builder)=>{
      builder.addCase(getAllHistory.fulfilled,(state,action)=>{
        state.data = action.payload
        state.loading = "succeeded"
      })
      builder.addCase(getAllHistory.rejected,(state)=>{
        state.loading = "failed"
      })
      builder.addCase(getAllHistory.pending,(state)=>{
        state.loading = "pending"
      })
      
    },
  });

export default historySlice.reducer;
