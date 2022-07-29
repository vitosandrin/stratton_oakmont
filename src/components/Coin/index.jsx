import React from 'react';
import {
  Coins,
  CoinContainer,
  CoinData,
  CoinName,
  CoinImage,
  CoinPrice,
  CoinRow,
  CoinSymbol,
  CoinVolume,
  CoinMarketCap,
  Red,
  Green,
} from './styles';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <CoinContainer>
      <CoinRow>
        <Coins>
          <CoinImage src={image} alt='crypto' />
          <CoinName>{name}</CoinName>
          <CoinSymbol>{symbol}</CoinSymbol>
        </Coins>
        <CoinData>
          <CoinPrice>U${price}</CoinPrice>
          <CoinVolume>U${volume.toLocaleString()}</CoinVolume>
          {priceChange < 0 ? (
            <Red>{priceChange.toFixed(2)}%</Red>
          ) : (
            <Green>{priceChange.toFixed(2)}%</Green>
          )}
          <CoinMarketCap>U${marketcap.toLocaleString()}</CoinMarketCap>
        </CoinData>
      </CoinRow>
    </CoinContainer>
  );
};

export default Coin;