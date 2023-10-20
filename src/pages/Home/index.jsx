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
import { Carousel, Loader, Modal } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCrypto,
  setCryptos,
} from "../../redux/actions/cryptoActions";
import CryptoTable from "../../components/CryptoTable";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalOpened, setModalOpened] = useState(false);
  const { cryptos, cryptoSelected } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const hasCoins = cryptos.length > 0;

  const fetchCrypto = async () => {
    const result = await api.get(
      `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
    );
    dispatch(setCryptos(result.data));
  };

  useEffect(() => {
    fetchCrypto();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = cryptos.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderCarousel = () => {
    if (hasCoins) {
      return (
        <WrapperCarousel>
          <ContainerCarousel>
            {cryptos.map((coin) => (
              <Carousel
                onClick={() => {
                  setModalOpened(true);
                  dispatch(setSelectedCrypto(coin));
                }}
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                priceChange={coin.price_change_percentage_24h}
              />
            ))}
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
      <CryptoTable data={filteredCoins} />
      <Modal open={modalOpened} onClose={() => setModalOpened(false)}>
        {cryptoSelected && <>{cryptoSelected.name}</>}
      </Modal>
    </Wrapper>
  );
};
