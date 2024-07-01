import styled from "styled-components";

export const LeftWrapper = styled.div`
    flex: 1;
    display: flex;
    align-content: center;

    .logo{
        fill: ${props => props.theme.color.primary};
        cursor: pointer;
        margin-left: 24px;
    }
`
