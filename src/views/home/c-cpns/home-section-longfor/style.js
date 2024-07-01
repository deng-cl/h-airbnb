import styled from "styled-components";

export const LongforWrapper = styled.div`
    margin-top: 30px;

    .longfor-content {
        display: flex;
        margin:0 -8px;

        .longfor-item{
            position: relative;
            flex-shrink: 0;
            width: 20%;
            padding: 0 8px;
            box-sizing: border-box;

            .set-item-radius {
                position: relative;
                border-radius: 6px;
                overflow: hidden;

                .cover {
                    width: 100%;
                    height: 100%;
                }

                .bg-cover {
                    width: calc(100%);
                    height: 60%;
                    position: absolute;
                    bottom: 0;
                    /* background-color: red; */
                    background: linear-gradient(-180deg, rgba(0,0,0,0) 3%, rgba(0,0,0) 100%);
                }

                .longfor-info{
                    position: absolute;
                    bottom: 30px;
                    left: 0;
                    right: 0;
                    margin:  0 auto;
                    color: white;
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;

                    .city {
                        margin-bottom: 4px;
                        font-weight: 700;
                    }

                    .price{
                        font-size: 12px;
                        color: #f5f5f5;
                    }
                }

            }
        }
    }
`
