import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'


const SectionTabs = memo((props) => {
    const { tabnames = [], tabClick = () => { } } = props

    const [currentIndex, setCurrentIndex] = useState(0)

    function changeCurrentIndex(index, name) {
        setCurrentIndex(index)
        tabClick(index, name)
    }

    return (
        <TabsWrapper>
            <ScrollView>
                {
                    tabnames.map((name, index) => (
                        <div
                            className={classNames("item", { active: index === currentIndex })}
                            onClick={e => changeCurrentIndex(index, name)}
                            key={name}
                        >{name}</div>
                    ))
                }
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabnames: PropTypes.array,
    tabClick: PropTypes.func
}

export default SectionTabs

