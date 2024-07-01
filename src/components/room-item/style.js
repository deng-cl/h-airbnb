import styled from "styled-components";

export const ItemWrapper = styled.div`
    width: 25%;
    box-sizing: border-box;
    padding: 8px;
    flex-shrink: 0;

    .inner{
        width: 100%;
    }
 
    .cover{
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 8px 0;
        border-radius: 3px;
        overflow: hidden;
        
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .desc {
        margin-top: 8px;
        margin-bottom: 6px;
        font-weight: bold;
    }

    .name{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 16px;
        margin-bottom: 12px;
        font-weight: 700;
    }
    
    .bottom{
        margin: 8px 0;
        display: flex;
        align-items: center;
        color: ${props => props.theme.text.primary};
        font-size: 12px;

        .count {
            margin: 0 6px;
        }

        .MuiRating-icon{
            margin-right: -2px;
            color: ${props => props.theme.color.primary};
        }
    }



    .slider {
        position: relative;
        cursor: pointer;

        &:hover > .control {
            display: block;
        }

        .control {
            z-index: 4;
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            color: #fff;
            display: none;

            .left,.right {
                position: absolute;
                width: 28%;
                height: 100%;
                background-color: #fff;
                cursor: pointer;

                svg{
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                }
            }

            .left {
                background: linear-gradient(-90deg, rgba(0,0,0,0) 3%, rgba(0,0,0,.5) 100%);
                svg {
                    left: 8px;
                }
            }

            .right{
                right: 0;
                background: linear-gradient(90deg, rgba(0,0,0,0) 3%, rgba(0,0,0,.5) 100%);
                svg {
                    right: 8px;
                }
            }
        }

        > .indicator {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 8%;
            z-index: 9;
            margin: 0 auto;
            /* background-color: red; */
            width: 35%;

            .dot-item {
                width: 20%;
                display: flex;
                justify-content: center;
                align-items: center;

                .dot{
                    width: 4px;                    
                    height: 4px;                    
                    background-color: white;
                    border-radius: 6px;

                    &.active {
                        width: 8px;
                        height: 8px;
                    }

                    &.middle {
                        width: 6px;
                        height: 6px;
                    }
                }
            }
        }
    }
`