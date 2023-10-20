import React, { useState, useEffect } from "react";
import api from "../../services/api";

import logo from "../../assets/images/logo.png";
import {
  Wrapper,
  Menu,
  Search,
  Title,
  Logo,
  ContainerSearch,
  CoinName,
  CoinValue,
  CoinVolume,
  CoinPercent,
  CoinMktCap,
  CoinContainerInfo,
  ContainerCarousel,
  WrapperCarousel,
} from "./styles";
import { Carousel, Loader, Modal, Coin } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setCryptos } from "../../redux/actions/cryptoActions";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [modalOpened, setModalOpened] = useState(false);
  const { crypto, cryptoSelected } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const hasCoins = crypto.length > 0;

  const fetchCrypto = async () => {
    const result = await api.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    dispatch(setCryptos(result.data));
  };

  useEffect(() => {
    fetchCrypto();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const renderCoins = crypto.map((coin) => coin);

  const filteredCoins = crypto.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderContainerInfo = () => {
    return (
      <CoinContainerInfo>
        <CoinName>Nome</CoinName>
        <CoinValue>Valor Atual</CoinValue>
        <CoinVolume>Volume</CoinVolume>
        <CoinPercent>%24h</CoinPercent>
        <CoinMktCap>Market Cap</CoinMktCap>
      </CoinContainerInfo>
    );
  };

  const renderCarousel = () => {
    if (hasCoins) {
      return (
        <WrapperCarousel>
          <ContainerCarousel>
            {renderCoins.map((coin) => {
              <Carousel
                onClick={() => {
                  setModalOpened(true);
                }}
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                priceChange={coin.price_change_percentage_24h}
              />;
            })}
          </ContainerCarousel>
        </WrapperCarousel>
      );
    }
    return (
      <WrapperCarousel>
        <Loader />
      </WrapperCarousel>
    );
  };

  return (
    <Wrapper>
      <Menu>
        <Logo src={logo} alt="logo" />
      </Menu>
      {renderCarousel()}
      <ContainerSearch>
        <Title>Procure uma Crypto</Title>
        <Search onChange={handleChange} />
      </ContainerSearch>
      {renderContainerInfo()}
      {filteredCoins.map((coin) => {
        return (
          <Coin
            coin={coin}
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
      <Modal open={modalOpened} onClose={() => setModalOpened(false)}>
        {renderCoins.map((coin) => {
          return <p>{coin.name}</p>;
        })}
      </Modal>
    </Wrapper>
  );
};
