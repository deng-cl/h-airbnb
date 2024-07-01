import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from "./style"
import RoomItem from '@/components/room-item'

const SectionRooms = memo((props) => {
    const { roomList, itemWidth } = props
    return (
        <RoomsWrapper className='rooms'>
            {
                roomList?.slice(0, 8)?.map(item => (
                    <RoomItem itemData={item} itemWidth={itemWidth} key={item.id}>{item.name}</RoomItem>
                ))
            }
        </RoomsWrapper>
    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array,
    itemWidth: PropTypes.string
}

export default SectionRooms