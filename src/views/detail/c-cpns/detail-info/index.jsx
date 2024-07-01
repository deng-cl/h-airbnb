import React, { memo } from 'react'
import { InfoWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import { Rating } from '@mui/material'

const DetailInfo = memo(() => {
    const { detailInfo } = useSelector(state => ({ // -- 获取 redux 中的 detailInfo 数据
        detailInfo: state.detail.detailInfo
    }), shallowEqual)

    return (
        <InfoWrapper>
            <div className="title">Room 详情</div>
            <div className="info">
                <div className='name'>
                    <span className='t'>标题:</span>
                    <span className='c'>{detailInfo.name}</span>
                </div>
                <div className="desc">
                    <span className='t'>描述:</span>
                    <span className='c'>{detailInfo.verify_info.messages.join(" · ")}</span>
                </div>
                <div className="price">
                    <span className='t'>价格:</span>
                    <span className='c'>{detailInfo.price_format}</span>
                </div>
                <div className="star">
                    <span className='t'>评星:</span>
                    <span className='c'>
                        <Rating name="half-rating" defaultValue={detailInfo.star_rating ?? 5} precision={0.1} readOnly sx={{ fontSize: "12px" }} />
                    </span>
                </div>
            </div>
        </InfoWrapper>
    )
})

export default DetailInfo