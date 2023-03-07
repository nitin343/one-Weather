import { configureStore } from "@reduxjs/toolkit";
import foreCastDetailReducer from '../Redux/reducers/foreCastData.reducer'

export default configureStore({
    reducer: {
        foreCastDetail: foreCastDetailReducer
    }
})