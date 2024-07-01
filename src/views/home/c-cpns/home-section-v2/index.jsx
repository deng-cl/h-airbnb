import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    const { infoData } = props

    const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? ""
    const [name, setName] = useState(initialName)
    const tabnames = infoData.dest_address?.map(item => item.name) // -- 过滤 name 

    const tabClick = useCallback((index, name) => { // -- 通过 useCallback 对传递给子组件的函数进行性能优化
        setName(name)
    }, [])

    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTabs tabnames={tabnames} tabClick={tabClick} />
            <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333333333333%" />
            <SectionFooter name={name} />
        </SectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2