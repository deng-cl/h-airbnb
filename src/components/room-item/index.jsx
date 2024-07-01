import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
    const { itemData, itemWidth = "25%", itemClickFn } = props

    const [selectedIndex, setSelectedIndex] = useState(0)

    const carouselRef = useRef() // -- swiper 容器 DOM 元素

    // -- evnet listening
    function swiperControl(isNext = true, event) {
        event.stopPropagation()

        isNext ? carouselRef.current.next() : carouselRef.current.prev()

        // -- change selectedIndex ↓
        let newIndex = null
        if (isNext) newIndex = selectedIndex + 1
        else newIndex = selectedIndex + 1

        const len = itemData?.picture_urls.length - 1 // -- 边界判断
        if (newIndex > len) newIndex = 0
        if (newIndex < 0) newIndex = len

        setSelectedIndex(newIndex) // -- update selectedIndex
    }

    function roomItemClickHandle() {
        if (itemClickFn) itemClickFn()
    }

    // -- Element: pic show DOM
    const pictureElement = useRef().current = ( // -- 普通 pic 的展示
        <div className="cover">
            <img src={itemData.picture_url} alt={itemData.name} />
        </div>
    )

    const swiperElement = useRef().current = ( // -- 轮播图 pics 的展示
        <div className="slider">
            {/* control 切换控件 */}
            <div className="control">
                <div className="left" onClick={e => swiperControl(false, e)}>
                    <IconArrowLeft width={18} height={18} />
                </div>
                <div className="right" onClick={e => swiperControl(true, e)}>
                    <IconArrowRight width={18} height={18} />
                </div>
            </div>
            {/* indicatore 指示器 */}
            <div className="indicator">
                <Indicator selectedIndex={selectedIndex}>
                    {
                        itemData?.picture_urls?.map((item, index) => (
                            <div className="dot-item" key={item}>
                                <span
                                    className={
                                        classNames("dot", {
                                            active: selectedIndex === index,
                                            middle: index === selectedIndex - 1 || index === selectedIndex + 1
                                        })
                                    }></span>
                            </div>
                        ))
                    }
                </Indicator>
            </div>
            {/* swiper 图片轮播展示区 */}
            <Carousel dots={false} ref={carouselRef}>
                {
                    itemData?.picture_urls?.map(item => (
                        <div className="cover" key={item}>
                            <img src={item} alt="" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )

    return (
        // <ItemWrapper >
        <ItemWrapper style={{ width: itemWidth }}>
            <div className="inner" onClick={e => roomItemClickHandle()}>
                { // -- 判断是否是轮播图还是单图片的展示方式
                    itemData.picture_urls ? swiperElement : pictureElement
                }

                <div className="desc" style={{ color: itemData?.verify_info?.text_color || "#36576A" }}>{itemData.verify_info.messages.join(" · ")}</div>

                <div className="name">{itemData.name}</div>

                <div className="price">{itemData.price_format}/晚</div>

                <div className="bottom">
                    <Rating name="half-rating" defaultValue={itemData.star_rating ?? 5} precision={0.1} readOnly sx={{ fontSize: "12px" }} />
                    <span className='count'>{itemData?.reviews_count}</span>
                    {
                        itemData.bottom_info && (
                            <span> · {itemData.bottom_info.content}</span>
                        )
                    }
                </div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object,
    innerWidth: PropTypes.string,
    isSwiper: PropTypes.bool,
    itemClickFn: PropTypes.func
}

export default RoomItem
