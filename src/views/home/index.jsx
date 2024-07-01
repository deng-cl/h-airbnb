import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyObj } from '@/utils'
import HomeSctionLongfor from './c-cpns/home-section-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfig } from '@/store/modules/main'

const Home = memo(() => {
    const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector(state => ({ // -- 获取 store 中的 state 
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        longforInfo: state.home.longforInfo,
        plusInfo: state.home.plusInfo

    }), shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHomeDataAction()) // -- 请求 home page 数据
        dispatch(changeHeaderConfig({ isFixed: true, topAlphs: true }))
    }, [dispatch])

    console.log(2);

    return (
        <HomeWrapper>
            <div className="container">
                <HomeBanner />
                <div className="content">
                    {isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}

                    {isEmptyObj(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}

                    {isEmptyObj(longforInfo) && <HomeSctionLongfor infoData={longforInfo} />}

                    {isEmptyObj(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}

                    {isEmptyObj(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}

                    {isEmptyObj(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
                </div>
            </div>
        </HomeWrapper>
    )
})

export default Home