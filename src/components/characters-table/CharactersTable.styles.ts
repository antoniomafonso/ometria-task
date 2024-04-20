import styled from "@emotion/styled";
import { COLORS } from "../../global/colors";

export const StyledTable = styled.table`
  border-collapse: collapse;
  text-align: center;
  table-layout: fixed;
  width: 100%;
`;

export const StyledTableHead = styled.thead`
  border-bottom: 0.25rem solid ${COLORS.vibrantBlue};
  background-color: ${COLORS.darkBlue};
`;

export const StyledTh = styled.th`
  width: 7.8%;

  :nth-last-of-type(-n + 3) {
    width: 10%;
  }
`;

export const StyledTableBody = styled.tbody`
  background-color: ${COLORS.mediumBlue};

  & > tr:nth-of-type(even) {
    background-color: ${COLORS.mediumLightBlue};
  }
`;

export const StyledTd = styled.td`
  border: 0.1rem solid ${COLORS.vibrantBlue};
  word-wrap: break-word;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0.2rem;
`;
