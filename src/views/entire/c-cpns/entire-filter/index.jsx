import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const EntireFilter = memo(() => {
    const [selectedList, setSelectedList] = useState([])

    function itemClickHandle(item) {
        const newSelectedList = [...selectedList]

        if (newSelectedList.includes(item)) { // -- 已存在该 item 时 --> 做移除操作 --> 反之做添加操作 
            const findIndex = newSelectedList.findIndex(filterItem => filterItem === item)
            newSelectedList.splice(findIndex, 1)
        }
        else newSelectedList.push(item)

        setSelectedList(newSelectedList)
    }

    return (
        <FilterWrapper>
            <div className="filter">
                {
                    filterData.map((item, index) => (
                        <div
                            className={classNames("item", { active: selectedList.includes(item) })}
                            onClick={e => itemClickHandle(item)}
                            key={index}
                        >{item}</div>
                    ))
                }
                <div className="tip">暂模拟对应选中与取消{" --> "}因为暂无对应接口!</div>
            </div>
        </FilterWrapper>
    )
})

export default EntireFilter