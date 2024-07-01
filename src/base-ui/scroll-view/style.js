import styled from "styled-components";

export const ViewWrapper = styled.div`
    position: relative;
    padding: 8px 0;
    z-index: 1;

    .scroll{
        overflow: hidden;
        .sroll-content {
            display: flex;
            transition: transform 250ms ease;
        }
    }
    
    > .left, >.right {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 9;
        width: 28px;
        height: 28px;
        border-radius: 14px;
        border: 1px solid ${props => props.theme.color.borderColor};
        background-color: white;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        ${props => props.theme.mixin.boxShadow};
    }

    > .left {
        left: -14px;
    }
    
    > .right {
        right: -14px;
        /* transform: translateX(-50%); */
    }
`
