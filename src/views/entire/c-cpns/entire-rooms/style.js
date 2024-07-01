import styled from "styled-components";

export const RoomsWrapper = styled.div`
    padding: 20px 16px;

    .title {
        font-size: 22px;
        font-weight: 700;
        color: #222;
        margin: 0 0 10px 10px;
    }

    .room-list {
        position: relative;
        display: flex;
        flex-flow: row wrap;

        > .cover{
            position: absolute;
            inset: 0;
            background-color: rgba(255,255,255,.8);
        }
    }
`
