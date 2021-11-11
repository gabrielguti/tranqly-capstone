import styled from "styled-components";

export const ContainerProfessional=styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 35px;
    width: 90%;
    box-shadow: 0px 0px 15px 6px rgb(0 0 0 / 30%);
    border: none;
    padding: 10px;
    @media(min-width:767px){
        flex-direction: row;
        height: 300px;
    }
`
export const ContainerImgProfessional=styled.div`
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 90%;
        border-radius: 100%;
        @media(min-width:767px){
            width: 70%;
        }
    }
    @media(min-width:767px){
        width: 450px;
    }
`
export const ContainerName=styled.div`
    position: absolute;
    left: 135px;
    p{
        text-transform:uppercase;
        font-weight: bold;
    }
    svg {
          font-size: 20px;
          color: var(--yellow200);
    }
    @media(min-width:767px){
        left:180px;
    }
    @media(min-width:1023px){
        left: 470px;
    }
`
export const ContainerSkylls=styled.div`
    margin-left: 20px;
`
export const ContainerDescription=styled.div`

`
export const ContainerProfession=styled.div`
    @media(min-width:767px){
        margin: 80px 0 0 0;
        
    }
`
export const PProfession=styled.p`
    margin-top: 20px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
`
export const PDescription=styled.p`

`
export const ContainerAreas=styled.div`
        margin:20px 0 20px 0;
@media(min-width:767px){
        display: flex;
    }
`
export const PAreas = styled.p`
    font-size: 15px;
    font-weight: lighter;
    color: rgba(0, 0, 0, 0.7);
    margin-right: 10px;
`
export const ContainerButtonSchedule=styled.div`
    margin: 0 auto;
`
export const ButtonSchedule = styled.button`
    margin:10px 0;
    width: 200px;
    max-width: 200px;
    height: 35px;
    border-radius: 5px;
    background-color: var(--orange200);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 15px;
    :hover {
     background-color: var(--orange100);
    }
`