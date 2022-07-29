import styled from "styled-components";

export const CoinContainer = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;
  
`;

export const CoinRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    height: 75px;
    width: 100%;
    max-width: 80vw;
    border-bottom: 2px solid ${(props) => props.theme.colors.secundary};
`;

export const Coins = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    width: 100%;

    @media (max-width: 800px){
        font-size: 12px;
        margin-left: 12px;
    }
`;

export const CoinImage = styled.img`
    height: 40px;
    width: 40px;

    margin-right: 10px;
    margin-left: 20px;
    @media (max-width: 800px){
        height: 20px;
        width: 20px;
        margin-left: 0;
    }
`;

export const CoinName = styled.h1`
    width: 50px;
`;

export const CoinSymbol = styled.p`
    text-transform: uppercase;
    margin-left: 35px;
    width: 50px;
    padding: 5px;
    @media (max-width: 800px){
        display: none;
        padding: 0;
        margin-left: 20px;
    }
`;

export const CoinData = styled.div`
    display: flex;
    flex: none;    
    justify-content: space-around;
    align-items: center;

    width: 900px;
    max-width: 75vw;

    margin-right: auto;
    margin-left: auto;

    @media (max-width: 800px){
        font-size: 12px;
        margin: 0;
        align-items: start;
        justify-content: space-around;
        width: 75%;
    }
`;

export const CoinPrice = styled.p`
    width: 20px;
    
    @media(max-width: 800px){
        margin-left: 35px;
    }
`;

export const CoinVolume = styled.p`
    width: 75px;
    @media(max-width: 800px){
        display: none;
    }
`;

export const CoinMarketCap = styled.p`
    width: 75px;
    @media(max-width: 800px){
        display: none;
    }
`;


export const Red = styled.p`
    color: #f00606;
    width: 20px;
    @media(max-width: 800px){
        margin-left: 50px;
    }
`;

export const Green = styled.p`
    color: #11d811;
    width: 20px;
    @media(max-width: 800px){
        margin-left: 50px;
    }
`;