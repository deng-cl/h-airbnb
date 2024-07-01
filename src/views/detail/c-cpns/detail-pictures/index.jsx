import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PicturesWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPictures = memo((props) => {
    // const { getIShowBrowser } = props

    const { detailInfo } = useSelector(state => ({ // -- 获取 redux 中的 detailInfo 数据
        detailInfo: state.detail.detailInfo
    }), shallowEqual)

    const [showBrowser, setShowBrowser] = useState(false)

    function switchShowPictureBrowser(isShow) {
        setShowBrowser(isShow)
        // getIShowBrowser(isShow)
    }

    return (
        <PicturesWrapper>
            <div className="pictures">
                <div className="left">
                    <div className="item" onClick={e => switchShowPictureBrowser(true)}>
                        <img src={detailInfo?.picture_urls?.[0]} alt="" />
                        <div className="cover"></div>
                    </div>
                </div>

                <div className="right">
                    {
                        detailInfo?.picture_urls?.slice(1, 5).map(picture_url => (
                            <div className="item" onClick={e => switchShowPictureBrowser(true)} key={picture_url} >
                                <img src={picture_url} alt="" />
                                <div className="cover"></div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="btn">
                <button className="show-browser-btn" onClick={e => switchShowPictureBrowser(true)}>显示图片</button>
            </div>

            {
                showBrowser && (
                    <PictureBrowser
                        pictureRrls={detailInfo?.picture_urls}
                        closeClickFn={e => switchShowPictureBrowser(false)}
                    />
                )
            }
        </PicturesWrapper>
    )
})

export default DetailPictures