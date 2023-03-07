import { createSlice } from "@reduxjs/toolkit";

const foreCastDetailSlice = createSlice({
    name: 'foreCastDetail',
    initialState: {
        data: {}
    },

 reducers: {
    SET_FORECAST(state , action){
        state.data= action.payload
    }
 }
})

export const {SET_FORECAST} = foreCastDetailSlice.actions
export default foreCastDetailSlice.reducer