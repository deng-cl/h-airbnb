import React, { memo, useEffect, useState } from 'react'
import { CenterWrapper } from './style'
import searchTitles from "@/assets/data/search_titles.json"
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
    const { isSearch, searchBarClickFn } = props

    const [currentIndex, setCurrentIndex] = useState(0)

    const titles = searchTitles.map(item => item.title)

    function searchBarClickHandle() {
        if (searchBarClickFn) searchBarClickFn()
    }

    useEffect(() => {
        console.log(1);
    }, [])

    return (
        <CenterWrapper $isSearch={isSearch}>
            <CSSTransition in={!isSearch} classNames="bar" timeout={250} unmountOnExit
                children={(
                    <div className="search-bar" onClick={e => searchBarClickHandle()}>
                        <div className="text">
                            <span>搜索房源和体验</span>
                        </div>
                        <div className="icon">
                            <IconSearchBar />
                        </div>
                    </div>
                )}
            />

            <CSSTransition in={isSearch} classNames="detail" timeout={250} unmountOnExit
                children={(
                    <div className="search-detail">
                        <SearchTabs titles={titles} tabClick={setCurrentIndex} />
                        <div className="infos">
                            <SearchSections searchInfos={searchTitles[currentIndex].searchInfos} />
                        </div>
                    </div>
                )}
            />
        </CenterWrapper >
    )
})

export default HeaderCenter