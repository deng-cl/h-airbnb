import styled from "styled-components";

export const CenterWrapper = styled.div`

    .search-bar {
        position: ${props => props.$isSearch ? "absolute" : "static"}; 
        display: flex;
        align-items: center;
        padding: 6;
        border: 1px solid ${props => props.theme.isAlpha ? "white" : props.theme.color.borderColor};
        padding: 6px;
        border-radius: 32px;
        ${props => props.theme.mixin.boxShadow};

        color: ${props => props.theme.isAlpha ? "white" : props.theme.text.primaryColor};

        .text {
            margin-left: 12px;
            margin-right: 180px;
            font-weight: bold;
        }

        .icon {
            width: 32px;
            height: 32px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            background-color: ${props => props.theme.color.primary};
        }
    }

    .search-detail {
        position: ${props => !props.$isSearch ? "absolute" : "relative"}; 
        transform-origin: 50% 0;
        will-change: transform, opacity;

        .infos {
            position: absolute;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    // -- amination
    .bar-enter {
        transform: scale(2.85714,1.375) translateY(58px);
        opacity: 0;
    }

    .bar-enter-active {
        transition: all 250ms ease;
        transform: scale(1) translateY(0);
        opacity: 1;
    }

    .bar-exit {
        opacity: 0;
    }

    .detail-enter {
        transform: scale(0.35,0.727273) translateY(-58px);
        opacity: 0;
    }

    .detail-enter-active {
        transition: all 250ms ease;
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }

    .detail-exit {
        opacity: 0;
    }
`
