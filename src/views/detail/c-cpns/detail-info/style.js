import styled from "styled-components";

export const InfoWrapper = styled.div`
    padding: 0 15px;
    

    .title {
        font-weight: 700;
        font-size: 24px;
        color: #333;
        margin-bottom: 8px;
    }

    .info {
       > * {
        margin-bottom: 8px;
       }

        .t {
            font-size: 16px;
            margin-right: 5px;
            color: red;
            font-weight: bold;
            color: #333;
            opacity: 0.8;
        }

        .c{
            color: rgb(118, 118, 118);
        }
    }
` 
