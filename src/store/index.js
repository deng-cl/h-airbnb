import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./modules/home";
import entireReducer from "./modules/entire"; // -- entire reducer 采用原始普通的 redux 进行管理
import detailSlice from "./modules/detail";
import mainSlice from "./modules/main";

const store = configureStore({
    reducer: {
        main: mainSlice,
        home: homeSlice,
        entire: entireReducer,
        detail: detailSlice
    }
})

export default store
