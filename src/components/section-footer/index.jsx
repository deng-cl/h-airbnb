import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom/dist'

import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'


const SectionFooter = memo((props) => {
    const { name } = props

    let showMessage = "显示全部"
    if (name) {
        showMessage = `显示更多${name}房源`
    }

    const navigate = useNavigate()

    function toEntirePage() { // -- click event
        navigate("/entire")
    }

    return (
        <FooterWrapper style={{ color: name ? "#00848A" : "#000" }}>
            <div className="info" onClick={toEntirePage}>
                <div className="text">{showMessage}</div>
                <IconMoreArrow />
            </div>
        </FooterWrapper>
    )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter