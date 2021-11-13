import styled from "styled-components";

export const ContainerSearch = styled.div`
    display: flex;
    height: 100px;
    background: linear-gradient(90deg,rgba(69,36,122,0.87) 0%,#9677d9 100%);
    flex-direction:column;
    justify-content: center;
    align-items: center;

    svg{
        position: absolute;
        top:95px;
        right: 10%;
        @media(min-width:767px){
            top: 145px;
            right: 18%;
        }
        @media(min-width:1023px){
            top: 145px;
            right: 36%;
        }
    }

    @media(min-width:767px){

        height: 150px;
    }
`
export const Input=styled.input`
    height: 40px;
    width: 90%;
    margin-bottom: 35px;
    border-radius: 5px;
    border: none;
    background-color: white;
    @media(min-width:767px){
        width:550px;
    }
`
export const P = styled.p`
    display:none;
@media(min-width:767px){
    display: block;
    font-size: 25px;
    font-weight: lighter;
    color: var(--gray200);
    margin-bottom: 10px;
}

`