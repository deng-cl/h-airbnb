import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { changeHeaderConfig } from '@/store/modules/main'

const Entire = memo(() => {

    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 18)
        dispatch(changeHeaderConfig({ isFixed: true, topAlphs: false }))
    }, [dispatch])

    return (
        <EntireWrapper>
            <EntireFilter />
            <div className="content">
                <EntireRooms />
                <EntirePagination />
            </div>
        </EntireWrapper>
    )
})

export default Entire