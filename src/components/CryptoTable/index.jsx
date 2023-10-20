import React from "react";
import { TableStyles } from "./styles";
const CryptoTable = ({ data }) => {
  return (
    <TableStyles>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Símbolo</th>
          <th>Market Cap</th>
          <th>Volume</th>
          <th>Imagem</th>
          <th>Variação de Preço (24h)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr key={coin.id}>
            <td>{coin.name}</td>
            <td>{coin.price}</td>
            <td>{coin.symbol}</td>
            <td>{coin.marketcap}</td>
            <td>{coin.volume}</td>
            <td>
              <img src={coin.image} alt={coin.name} width="30" height="30" />
            </td>
            <td>{coin.priceChange}%</td>
          </tr>
        ))}
      </tbody>
    </TableStyles>
  );
};

export default CryptoTable;
