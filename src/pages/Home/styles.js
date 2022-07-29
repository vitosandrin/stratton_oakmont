import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;

    font-family: ${(props) => props.theme.fonts.regular};
    overflow-x: hidden;
`;

export const CoinCard = styled.div`

`;

export const WrapperCarousel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-height: 40vh;
    height: 100%;


    margin-right: auto;
    margin-left: auto;
    
    @media(max-width: 800px){
        height: 200px;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    
    margin-top: 10px;
    margin-right: auto;
    margin-left: auto;

    justify-content: center;
    align-items: center;

`;

export const ContainerCarousel = styled.div`
    max-width: 75vw;
    max-height: 50vw;
    display: flex;
    flex-direction: row;

    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 15px;

    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;

    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    margin-top: 10px;
    background-color: transparent;
    
    margin: 12px;

    background-color: ${(props) => props.theme.colors.secundary};
    border: none;

    padding: 15px 30px;
    border-radius: 7px;

    cursor: pointer;
    transition: .5s ease all;

    :hover{
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.primary};
        border: solid 1px ${(props) => props.theme.colors.secundary};
    }
`;

export const ImageButton = styled.image`
    height: 40px;
    width: 30px;
`;

export const Menu = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;

    padding: 5px;
    height: 120px;
    width: 100vw;
    margin-bottom: 15px;

    background-color: ${(props) => props.theme.colors.primary};
    border-bottom: 2px solid ${(props) => props.theme.colors.secundary};

`;

export const Logo = styled.img`
        //margin-right: auto;
        margin-right: 22px;
        justify-content: center;
`;

export const CoinContainerInfo = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    max-width: 80vw;

    margin-left: auto;
    margin-right: auto;

    border-bottom: 1px solid ${(props) => props.theme.colors.secundary};
    border-top: 1px solid ${(props) => props.theme.colors.secundary};

    @media (max-width: 800px){
        font-size: 12px;
        width: 80vw;
        justify-content: space-between;
    }
`;

export const CoinName = styled.p`
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    width: 100px;

    margin-top: 10px;
    margin-bottom: 10px;

    color: ${(props) => props.theme.colors.text};
`;

export const CoinValue = styled.p`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    width: 100px;

    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 18px;
    color: ${(props) => props.theme.colors.text};
    
    @media(max-width: 800px){
        width: 200px;
        justify-content: end;
    }
`;

export const CoinVolume = styled.p`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    width: 100px;

    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 25px;

    color: ${(props) => props.theme.colors.text};

    @media(max-width: 800px){
        display: none;
    }
`;

export const CoinPercent = styled.p`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    width: 100px;

    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    color: ${(props) => props.theme.colors.text};
    @media(max-width: 800px){
        width: 180px;
        justify-content: end;
    }
`;

export const CoinMktCap = styled.p`
    display: flex; 
    flex-direction: row;
    justify-content: end;
    width: 100px;

    margin-top: 10px;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.text};
    @media(max-width: 800px){
        display: none;

    }
`;

export const ContainerSearch = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    margin-bottom: 25px;
`;


export const Title = styled.h1`
    margin-top: 10px;
    margin-bottom: 10px;

    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 0.15px;

    
    color: ${(props) => props.theme.colors.text};
`;

export const Search = styled.input`
    margin-top: 10px;
    margin-bottom: 15px;
    width: 300px;
    min-height: 30px;
    max-height: 35px;
    max-width: 50vw;
    border-radius: 10px;
    padding: 4px;
    box-shadow: 0 6px 16px ${(props) => props.theme.colors.text};
   
    background-color: ${(props) => props.theme.colors.primary};
    border: solid 2px ${(props) => props.theme.colors.primary};
    transition: .5s ease all;
    outline: none;

    &:hover{
        border: solid 2px ${(props) => props.theme.colors.grey};
        background-color: ${(props) => props.theme.colors.grey};

    }

    @media(max-width: 800px){
        margin-bottom: 5px;
    }
`;

//

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



