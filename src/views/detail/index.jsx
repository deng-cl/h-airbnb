import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfo from './c-cpns/detail-info'
import { useDispatch } from 'react-redux'
import { changeHeaderConfig } from '@/store/modules/main'

const Detail = memo(() => {
    // const [isPictureBrowser, setIsPictureBrowser] = useState(false) // -- 当当前展示的是图片浏览器预览时，不需要 AppHeader 头部

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeHeaderConfig({ isFixed: false, topAlphs: false }))
    }, [dispatch])

    return (
        <DetailWrapper>
            <DetailPictures />
            <DetailInfo />
        </DetailWrapper>
    )
})

export default Detail