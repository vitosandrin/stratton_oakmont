import styled from "styled-components";

export const TableStyles = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;

      :last-child {
        border-right: none;
      }
    }

    th {
      background: #f2f2f2;
    }

    tr:nth-child(even) {
      background: #f2f2f2;
    }
  }
`;
