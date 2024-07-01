import styled from "styled-components";

export const BrowserWrapper = styled.div`
    position: fixed;
    inset: 0;
    background-color: #333;
    display: flex;
    flex-flow: column nowrap;
    z-index: 999;
    /* user-select: none; */

    > .top {    
        flex-shrink: 0;
        height: 86px;
        position: relative;

        .close-btn {
            position: absolute;
            top: 15px;
            right: 25px;
            cursor: pointer;
        }
    }
    
    > .slider {
        position: relative;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;


        .control {
            width: 100%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 4;

            > *{ cursor:pointer }
            > *:hover { color: #f5f5f5 }
        }

        .picture {
            user-select: none;
            overflow: hidden;
            position: relative;
            width: 100%;
            max-width: 105vh;
            height: 100%;


            img {
                position: absolute;
                inset: 0;
                height: 100%;
                width: 100%;
                object-fit: contain;
                margin: auto;
            }

            .pic-enter {
                transform: translateX(${props => props.$isNext ? "100%" : "-100%"});
                opacity: 0;
            }
            .pic-enter-active {
                transform: translateX(0);
                opacity: 1;
                transition: all 200ms ease;
            }

            .pic-exit {
                opacity: 1;
            }
            .pic-exit-active {
                opacity: 0;
                transition: all 200ms ease;
            }
        }
    }

    > .preview {
        flex-shrink: 0;
        /* height: 100px; */
        transition: height 600ms ease;
        height: ${props => props.$isShowReviewList ? "100px" : "20px"};
        margin: auto;
        margin-top: 10px;
        margin-bottom: 20px;
        width: 100%;
        max-width: 105vh;
        overflow: hidden;

        .desc {
            color: white;
            display: flex;
            justify-content: space-between;
            /* margin-bottom: 10px; */

            .toggle {
                cursor: pointer;
            }
        }

        .list {
            display: flex;
            margin-top: 5px;

            .item {
                display: block;
                max-height: 75px;
                margin-right: 8px;
                opacity: 0.5;
    
                img{
                    max-height: 75px;
                }

                &.active{
                    opacity: 1;
                }
            }
            
        }
    }
`
