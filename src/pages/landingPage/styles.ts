import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    .allComments {
        text-align: center;
        h1 {
            padding: 20px 0;
            color: var(--black0);
        }
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 400px;
    background: linear-gradient(
        90deg,
        rgba(69, 36, 122, 0.87) 0%,
        #9677d9 98.95%
    );
    display: flex;
    justify-content: center;
    .header {
        padding: 20px;
        width: 100%;
        max-width: 1280px;
        display: flex;
        justify-content: space-around;
        color: var(--gray100);
    }
    .info {
        display: flex;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
        gap: 20px;
    }
    .img {
        padding: 20px;
        display: none;
        justify-content: flex-end;
        display: none;
        @media (min-width: 800px) {
            display: flex;
        }
    }
`

export const MainContainer = styled.div`
    text-align: center;
    color: var(--black0);
    width: 100%;
    padding: 30px 0;
`

export const Scroll = styled.div`
    width: 100%;
    min-height: 300px;
    background-color: var(--gray50);
    padding: 20px;
    .containerSlick {
        max-width: 1280px;
        margin: auto;
    }
    .slick-slide {
    }
    .slick-prev,
    .slick-next {
        margin: 0 20px;
        z-index: 1;
        width: 40px;
        height: 100%;
        opacity: 0;
        transition-duration: 0.5s;
        ::before {
            font-size: 40px;
            color: var(--black0);
        }
    }
    ::before {
        color: var(--gray200);
    }
    :hover .slick-next,
    :hover .slick-prev {
        opacity: 0.5;
        transition-duration: 0.5s;
    }
`

export const FooterContainer = styled.div`
    background-color: var(--gray50);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    flex-direction: column;
    color: var(--black0);
    h1 {
        padding: 20px 0;
        font-size: 32px;
    }
    .containerProfile {
        padding: 20px 0;
        width: 100%;
        max-width: 1280px;
        margin: auto;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .profile {
        width: 150px;
        font-weight: 300;
        text-align: center;
        img {
            border-radius: 50%;
            width: 90px;
            height: 90px;
        }
        h1 {
            font-size: 20px;
            font-weight: 300;
        }
    }
    p {
        font-size: 13px;
    }
    a {
        color: var(--black0);
    }
    svg {
        margin: 0 8px;
        font-size: 20px;
    }
`

export const Comments = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    max-width: 1280px;
    width: 100%;
    margin: auto;
    @media (min-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`
