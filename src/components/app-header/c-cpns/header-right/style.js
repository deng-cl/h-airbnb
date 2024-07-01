import styled from "styled-components";


export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 24px;
    color: ${props => props.theme.isAlpha ? "white" : props.theme.text.primaryColor};

    .btns, .profile{
        display: flex;
        align-items: center;
    }

    .btns {
        .btn{
            /* margin-right: 24px; */
            height: 18px;
            line-height: 18px;
            padding: 12px 18px;
            border-radius: 18px;
            margin: 2px;
            font-weight: bold;
            cursor: pointer;
            
            &:hover{
                background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5"};
            }
        }
    }

    .profile {
        position: relative;
        border: 1px solid ${props => props.theme.isAlpha ? "white" : props.theme.color.borderColor};
        border-radius: 80px;
        padding: 6px;
        cursor: pointer;
        
        svg {
            color:  ${props => props.theme.isAlpha ? "white !important" : ""};
        }

        ${props => props.theme.mixin.boxShadow};

        > .menu {
            margin: 0 14px 0 8px; 
        }

        .panel {
            position: absolute;
            right: 0;
            top: 54px;
            width: 240px;
            background-color: #ffffff;
            box-sizing: border-box;
            border-radius: 6px;
            box-shadow:0 2px 8px #5f5f5f30;
            color: ${props => props.theme.text.primaryColor};
            
            .top, .bottom {
                display: flex;
                flex-flow: column nowrap;
                padding-bottom: 14px;
            }

            .top {
                border-bottom: 1px solid ${props => props.theme.color.borderColor};
            }

            .text {
                margin: 14px;
                margin-bottom: 0;
            }
            
        }
    }

`
