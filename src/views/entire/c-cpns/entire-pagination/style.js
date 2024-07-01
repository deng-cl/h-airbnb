import styled from "styled-components";

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    
    .info{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        .desc {
            margin-top: 12px;
        }

        /* pagination 组件的样式修改 */
        .MuiButtonBase-root.Mui-selected{
            background-color: #222;
            color: white;

            
        }
        .MuiButtonBase-root.MuiPaginationItem-root:not(.Mui-selected) {
            &:hover{
                text-decoration: underline;
                background-color: rgba(0,0,0,0);
            }
        }

        .MuiButtonBase-root.MuiPaginationItem-root .MuiPaginationItem-icon{
            font-size: 24px;
        }
    }

`