import styled from "styled-components";

export const HeaderWrapper = styled.div`
    /* background-color: white; */

    &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }

    > .content {
        position: relative;
        z-index: 999;
        background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
        border-bottom: 1px solid ${props => props.theme.isAlpha ? "rgba(255,255,255,0)" : props.theme.color.borderColor};

        > .top {
            display: flex;
            align-items: center;
            height: 80px;
        }
    }

`
// findDOMNode
export const SearchWrapper = styled.div`
    transition: height 200ms ease;
    height: ${props => props.$isSearch ? "100px" : "0"};
`
export const CoverWrapper = styled.div`
    position: fixed;
    inset: 0;
    /* top: 180px; */
    margin: 0;
    background-color: rgba(0,0,0,.3);
    z-index:99;
`