import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        headerConfig: {
            isFixed: true,
            topAlphs: false, // -- 在窗口顶部展示时，背景是否需要为透明
        }
    },
    reducers: {
        changeHeaderConfig(state, { payload }) {
            state.headerConfig = payload
        }
    }
})

export const { changeHeaderConfig } = mainSlice.actions

export default mainSlice.reducer
