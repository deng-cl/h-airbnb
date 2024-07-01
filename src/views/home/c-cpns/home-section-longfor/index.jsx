import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'

const HomeSctionLongfor = memo((props) => {
    const { infoData } = props

    return (
        <LongforWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <div className="longfor-content">
                <ScrollView>
                    {
                        infoData?.list.map((item, index) => (
                            <div className="longfor-item" key={index}>
                                <div className="set-item-radius">
                                    <img src={item.picture_url} alt={item.city} className="cover" />
                                    <div className="bg-cover"></div>
                                    <div className="longfor-info">
                                        <div className="city">{item.city}</div>
                                        <div className="price">均价 {item.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </ScrollView>
            </div>
        </LongforWrapper>
    )
})

HomeSctionLongfor.propTypes = {
    infoData: PropTypes.object
}

export default HomeSctionLongfor