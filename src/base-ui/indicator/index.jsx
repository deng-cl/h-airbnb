import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const { selectedIndex = 0 } = props

    const contentRef = useRef()
    useEffect(() => { // -- 处理当前 dog 在中 indicator 的中间显示
        // 0. 获取 .i-content 元素
        const contentEl = contentRef.current
        const contentElWidth = contentEl.clientWidth

        // 1. 获取当前 item 
        const itemEl = contentEl.children[selectedIndex]
        const itemOffsetLeft = itemEl.offsetLeft
        const itemWidth = itemEl.clientWidth

        // 2. 获取移动距离 distance
        let distance = (itemOffsetLeft + itemWidth * 0.5) - (contentElWidth * 0.5)

        // 3. 处理左边特殊情况
        if (distance < 0) distance = 0

        // 4. 处理右边特殊情况
        const slideableSize = contentEl.scrollWidth - contentElWidth // -- 获取可滚动大小
        if (distance > slideableSize) distance = slideableSize

        // 5. 移动对应 .i-content(dog) 位置
        contentEl.style.transform = `translate(${-distance}px)`
    }, [selectedIndex])

    return (
        <IndicatorWrapper>
            <div className="i-content" ref={contentRef}>
                {props.children}
            </div>
        </IndicatorWrapper>
    )
})

Indicator.propTypes = {
    selectedIndex: PropTypes.number
}

export default Indicator