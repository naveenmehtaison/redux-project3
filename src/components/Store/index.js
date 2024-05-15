import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
const Store = configureStore({
    reducer:{Showcart:CartReducer.reducer}
})
export default Store