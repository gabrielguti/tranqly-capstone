import styled from 'styled-components'

export const Card = styled.div`
    margin: auto;
    width: 100%;
    min-height: 300px;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    text-align: center;
    .img {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }
    }
    .infos {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        h1 {
            font-size: 18px;
        }
        p {
            font-size: 14px;
            color: var(--gray200);
        }
        span {
            font-size: 18px;
        }
    }
    .stars {
        font-size: 20px;
        color: var(--yellow200);
    }
    @media (min-width: 500px) {
        flex-direction: row;
        text-align: left;
    }
`
