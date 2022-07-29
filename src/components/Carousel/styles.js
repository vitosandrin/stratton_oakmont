import styled from "styled-components";


export const ContainerSlider = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: auto;
    margin-left: auto;

    justify-content: space-around;
    scroll-behavior: smooth;
    
    //max-width: 75vw;
`;

export const CardSlider = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;

    display: flex;
    flex-direction: column;

    margin: 10px;
    padding: 8px;
    width: 100px;
    height: 160px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.grey};
    cursor: pointer;
    box-shadow: 1px 1px 5px ${(props) => props.theme.colors.text};
    transition: .6s ease all;

    :hover {
    background-color: white;
    }

    @media(max-width: 800px){
        width: 75px;
        height: 120px;
        padding: 10px;
    }
`;

export const ImageSlider = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    
    @media(max-width: 800px){
        width: 40px;
        height: 40px;
        margin-top: 8px;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Name = styled.span`
    margin: 8px;
    display: block;
    text-align: center;
    padding: 5px;
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
    font-size: 14px;
    
    @media(max-width: 800px){
        margin: 0;
        margin-top: 8px;
    }
`;

export const Green = styled.p`
    color: #11d811;
    
    @media(max-width: 800px){
        font-size: 14px;
        padding: 10px;
    }
`;



