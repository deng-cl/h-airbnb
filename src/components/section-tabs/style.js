import styled from "styled-components";

export const TabsWrapper = styled.div`
    > .item {
        padding: 15px;
        box-sizing: border-box;
        margin-right: 14px;
        cursor: pointer;
        border: 1px solid ${props => props.theme.color.borderColor};
        /* ${props => props.theme.mixin.boxShadow} */
        box-shadow: 0 1px 4px rgba(0,0,0,0.14);

        flex-basis: 120px;
        flex-shrink: 0;
        flex-grow: 1;
        text-align: center;
        white-space: nowrap;
        
        &.active {
            background-color: ${props => props.theme.color.secondary};
            color: white;
        }
    }
    
`

