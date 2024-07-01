import { getEntireData } from "@/services/modules/entire"
import * as actionTypes from "./constants"

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_ROTAL_COUNT,
    totalCount
})

export const fetchEntireRoomListDataAction = (pageCount = 0) => { // -- request roomList data
    return async (dispatch, getState) => {
        dispatch(changeCurrentPageAction(pageCount)) // -- change current page

        dispatch(changeIsLoadingAction(true)) // -- isLoading: true
        const { list, totalCount } = await getEntireData(pageCount * 20) // -- loaded
        dispatch(changeIsLoadingAction(false)) // -- isLoading: false

        dispatch(changeRoomListAction(list)) // -- re-load new room list data
        dispatch(changeTotalCountAction(totalCount))
    }
}

export const changeIsLoadingAction = (isLoading) => ({
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading
})
