import styled from "@emotion/styled";
import { COLORS } from "../../global/colors";
import { css } from "@emotion/react";

export const StyledTitle = styled.h1`
  color: ${COLORS.vibrantBlue};
  margin: 3rem;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const StyledButton = styled.button<{ disabled: boolean }>`
  width: 5rem;
  padding: 0.25rem;
  margin: 1rem;
  background-color: ${COLORS.lightBlue};
  border: 0.2rem solid ${COLORS.vibrantBlue};
  border-radius: 0.2rem;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: grey;
      border-color: grey;
    `}
`;

export const TableWrapperDiv = styled.div<{ hasData: boolean }>`
  height: 60rem;
  width: 125rem;
  margin: 1rem 5rem;
  border: 0.25rem solid ${COLORS.vibrantBlue};
  border-radius: 0.5rem;
  overflow: auto;
  display: flex;
  background-color: ${COLORS.mediumBlue};

  ${({ hasData }) =>
    !hasData &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;
