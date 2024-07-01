import React, { memo, useCallback, useRef, useState, } from 'react'
import { CoverWrapper, HeaderWrapper, SearchWrapper } from './style'
import HeaderLfet from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
    const [isSearch, setIsSearch] = useState(false)

    const { isFixed, topAlphs } = useSelector(state => ({
        isFixed: state.main.headerConfig.isFixed,
        topAlphs: state.main.headerConfig.topAlphs,
    }), shallowEqual)

    const searchBarClickFn = useCallback(() => {
        setIsSearch(true)
    }, [])

    // -- 监听窗口滚动
    const { scrollY } = useScrollPosition()
    const prevY = useRef(0) // -- 记录前滚动值
    if (!isSearch) prevY.current = scrollY // -- 在正常非 search 情况下滚动，记录对应的值
    if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

    // -- 顶部透明
    const isAlpha = topAlphs && scrollY === 0

    return (
        <ThemeProvider theme={{ isAlpha }}>
            <HeaderWrapper className={classNames({ fixed: isFixed })} >
                <div className="content">
                    <div className="top">
                        <HeaderLfet />
                        <HeaderCenter isSearch={isAlpha || isSearch} searchBarClickFn={searchBarClickFn} />
                        <HeaderRight />
                    </div>
                    <SearchWrapper $isSearch={isAlpha || isSearch}></SearchWrapper>
                </div>
                {isSearch && <CoverWrapper onClick={e => setIsSearch(false)}></CoverWrapper>}
            </HeaderWrapper>
        </ThemeProvider>
    )
})

export default AppHeader