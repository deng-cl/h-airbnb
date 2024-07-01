import styled from "styled-components";

export const PicturesWrapper = styled.div`
    position: relative;

    > .pictures {
        width: 100%;
        display: flex;
        height: 370px;

        img{
            object-fit: cover;
        }

        .left,.right{
            width: 50%;

            > .item {
                height: 100%;
                cursor: pointer;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }

        .right {
            /* width: 50%; */
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;
            justify-self: baseline;

            .item {
                width: calc(50% - 2px);
                border: 1px solid ${props => props.theme.color.borderColor};
                height: calc(50% - 1px);
            }
        }

        .item {
            position: relative;
            overflow: hidden;
            img{
                transition: all 200ms ease;
            }
            .cover {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,.3);
                opacity: 0;
            }
        }
        
        /* 处理 cover 蒙层效果 */
        &:hover .cover{
            opacity: 1;
        }

        .item:hover {

            .cover {
                opacity: 0 !important;
            }

            img{
                transform: scale(1.08);
            }
        }
    }

    .btn{
        text-align: right;
        > .show-browser-btn {
            padding: 10px 14px;
            background-color: white;
            border-radius: 3px;
            border: 0;
            background-color: ${props => props.theme.color.primary};
            color: white;
            margin-right: 8px;
            margin-top: 8px;
            cursor: pointer;
        }
    }
`
