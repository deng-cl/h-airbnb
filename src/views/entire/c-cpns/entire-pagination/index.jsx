import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { PaginationWrapper } from './style'
import { fetchEntireRoomListDataAction } from '@/store/modules/entire/actionCreators';


const EntirePagination = memo(() => {
    const { currentPage, roomList, totalCount } = useSelector(state => ({
        currentPage: state.entire.currentPage,
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount
    }), shallowEqual)

    const startPosition = currentPage * 20 + 1
    const endPosition = (currentPage + 1) * 20
    const pageCount = Math.ceil(totalCount / 20)

    const dispatch = useDispatch()
    function pageChangeHandle(e, pageCount) { // -- pagination 页码发生改变事件监听
        window.scrollTo(0, 0) // -- 回到顶部
        dispatch(fetchEntireRoomListDataAction(pageCount - 1)) // -- 重新请求对应 page 页数据
    }

    return (
        <PaginationWrapper>
            {
                !!roomList.length && (
                    <div className="info">
                        <Pagination count={pageCount} onChange={pageChangeHandle} />
                        <div className="desc">
                            第 {startPosition}-{endPosition < totalCount ? endPosition : totalCount} 个房源，共超过 {totalCount} 个
                        </div>
                    </div>
                )
            }
        </PaginationWrapper>
    )
})

export default EntirePagination