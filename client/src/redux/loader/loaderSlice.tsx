import { createSlice } from '@reduxjs/toolkit';
import { LoadingState } from '../../types/history';

const initialState = {
    loading: false,
} as LoadingState;

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialState,
    reducers: {
        changeLoadingState: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { changeLoadingState } = loadingSlice.actions;

export default loadingSlice.reducer;
