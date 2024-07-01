import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeDiscountInfo, getHomeHighScoreInfo, getHomeGoodPriceInfo, getHomeHotRecommendInfo, getHomeLongforInfo, getHomePlusInfo } from "@/services/modules/home";

export const fetchHomeDataAction = createAsyncThunk("fetch_home_data", (payload, { dispatch }) => { // -- 异步 action 
    getHomeGoodPriceInfo().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighScoreInfo().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })

    getHomeDiscountInfo().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })

    getHomeHotRecommendInfo().then(res => {
        dispatch(changeRcommendInfoAction(res))
    })

    getHomeLongforInfo().then(res => {
        dispatch(changeLongforInfoAction(res))
    })

    getHomePlusInfo().then(res => {
        dispatch(changePlusInfoAction(res))
    })
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        longforInfo: {},
        plusInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeRcommendInfoAction(state, { payload }) {
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state, { payload }) {
            state.longforInfo = payload
        },
        changePlusInfoAction(state, { payload }) {
            state.plusInfo = payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => { // -- 监听异步 action 
            state.goodPriceInfo = payload
        })
    }
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeRcommendInfoAction, changeLongforInfoAction, changePlusInfoAction } = homeSlice.actions

export default homeSlice.reducer
