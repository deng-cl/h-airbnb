import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DomeWrapper } from './style'
import classNames from 'classnames'

const Dome = memo(() => {

    const names = ["deng", "long", "li", "wang", "kong", "huang", "aaa", "bbb", "ccc", "ddd"]
    const [selectedIndex, setSelectedIndex] = useState(0)

    function toggleClickHandle(isNext = true) { // -- 切换当前选中 names 中的 index name --...
        let newIndex = isNext ? selectedIndex + 1 : selectedIndex - 1

        const len = names.length - 1
        if (newIndex < 0) newIndex = len
        if (newIndex > len) newIndex = 0

        setSelectedIndex(newIndex)
    }

    return (
        <DomeWrapper>
            <div className="control">
                <button onClick={e => toggleClickHandle(false)}>prev</button>
                <button onClick={e => toggleClickHandle(true)}>next</button>
            </div>

            <div className="indicator">
                <Indicator selectedIndex={selectedIndex}>
                    {
                        names.map((item, index) => (
                            <button key={item} className={classNames({ active: selectedIndex === index })}>{item}</button>
                        ))
                    }
                </Indicator>
            </div>
        </DomeWrapper>
    )
})

export default Dome