import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'

const PictureBrowser = memo((props) => {
    const { pictureRrls = [], closeClickFn } = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isNext, setIsNext] = useState(true)
    const [isShowReviewList, setIsShowReviewList] = useState(true)

    // -- 当进入图片浏览器页面时，使其对应滚动功能失效
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    // -- event function
    function closeBtnClickHandle() {
        if (closeClickFn) closeClickFn()
    }

    function controlClickHandle(isNext = true) {
        setIsNext(isNext) // -- 用于 css 动画判断动画起始位置
        let newIndex = currentIndex
        if (isNext) newIndex = newIndex + 1
        else newIndex = newIndex - 1

        const picsIndexSize = pictureRrls.length - 1
        if (newIndex < 0) newIndex = picsIndexSize
        if (newIndex > picsIndexSize) newIndex = 0

        setCurrentIndex(newIndex)
    }

    function reviewItemClickHandle(index) {
        setIsNext(index > currentIndex)
        setCurrentIndex(index)
    }

    return (
        <BrowserWrapper $isNext={isNext} $isShowReviewList={isShowReviewList}>
            <div className="top">
                <div className="close-btn" onClick={closeBtnClickHandle}>
                    <IconClose />
                </div>
            </div>

            <div className="slider">
                <div className="control">
                    <div className="left" onClick={e => controlClickHandle(false)}>
                        <IconArrowLeft width="77" height="77" />
                    </div>
                    <div className="right" onClick={e => controlClickHandle(true)}>
                        <IconArrowRight width="77" height="77" />
                    </div>
                </div>
                <div className="picture">
                    <SwitchTransition mode='in-out'>
                        <CSSTransition key={pictureRrls[currentIndex]} classNames="pic" timeout={200}
                            children={(
                                <img src={pictureRrls[currentIndex]} alt="" />
                            )}
                        />
                    </SwitchTransition>
                </div>
            </div>

            <div className="preview">
                <div className="info">
                    <div className="desc">
                        <div className="count">
                            <span>{currentIndex + 1}/{pictureRrls.length}:</span>
                            <span>room Ppartment图片{currentIndex + 1}</span>
                        </div>
                        <div className="toggle" onClick={e => setIsShowReviewList(!isShowReviewList)}>
                            <span>{isShowReviewList ? "隐藏" : "显示"}照片列表</span>
                            {isShowReviewList ? <IconTriangleBottom /> : <IconTriangleTop />}
                        </div>
                    </div>

                    <div className="list">
                        <Indicator selectedIndex={currentIndex}>
                            {
                                pictureRrls.map((item, index) => (
                                    <div className={classNames("item", { active: currentIndex === index })} onClick={e => reviewItemClickHandle(index)} key={item} >
                                        <img src={item} alt="" />
                                    </div>
                                ))
                            }
                        </Indicator>
                    </div>
                </div>
            </div>
        </BrowserWrapper>
    )
})

PictureBrowser.propTypes = {
    pictureRrls: PropTypes.array,
    closeClickFn: PropTypes.func
}

export default PictureBrowser