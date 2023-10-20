import React from "react";
import { TableStyles } from "./styles";
const CryptoTable = ({ data }) => {
  return (
    <TableStyles>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Símbolo</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Market Cap</th>
            <th>Volume</th>
            <th>Variação de Preço (24h) %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr key={coin.id}>
              <td>
                <img src={coin.image} alt={coin.name} />
              </td>
              <td>{coin.symbol.toUpperCase()}</td>
              <td>{coin.name}</td>
              <td>U$ {coin.current_price}</td>
              <td>{coin.market_cap.toFixed()}</td>
              <td>{coin.total_volume}</td>
              <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableStyles>
  );
};

export default CryptoTable;
