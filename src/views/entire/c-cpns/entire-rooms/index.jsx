import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { RoomsWrapper } from './style'
import { fetchEntireRoomListDataAction } from '@/store/modules/entire/actionCreators'
import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import { useNavigate } from 'react-router-dom'

const EntireRooms = memo(() => {
    const { roomList, totalCount, isLoading } = useSelector(state => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading,
    }), shallowEqual)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEntireRoomListDataAction())
    }, [dispatch])

    // event function 
    const navigate = useNavigate()
    function roomItemClickEventHandle(itemData) {
        dispatch(changeDetailInfoAction(itemData)) // -- 将 itemData 更新至 detail 中的 detailInfo 状态数据
        navigate("/detail") // -- 跳转至详情页
    }

    return (
        <RoomsWrapper>
            <div className="title">共{totalCount}处住所</div>
            <div className="room-list">
                {
                    roomList && roomList.map(item => (
                        <RoomItem itemData={item} itemWidth="20%" itemClickFn={e => roomItemClickEventHandle(item)} key={item._id} />
                    ))
                }
                {isLoading && <div className="cover"></div>}
            </div>
        </RoomsWrapper>
    )
})

export default EntireRooms
