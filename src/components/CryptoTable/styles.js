import styled from "styled-components";

export const TableStyles = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;

    th,
    td {
      padding: 1rem;
      border: 1px solid #e0e0e0;
      text-align: left;
    }

    th {
      background-color: #333;
      color: #fff;
    }

    tbody tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    img {
      max-width: 30px;
      max-height: 30px;
    }
  }
`;
