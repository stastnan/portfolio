import styled from "styled-components";

import { device } from "../../Breakpoints";

interface BgButton {
  isDark?: boolean;
}

interface ColorBtn {
  hue: number;
}

export const Card = styled.div`
  width: 45%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  gap: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius1};
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => theme.shadow.primary};
  padding: 2rem;

  ${device.xl} {
    width: 30%;
    height: auto;
  }
  ${device.md} {
    width: 80%;
    height: auto;
  }

  ${device.sm} {
    width: 80%;
    height: auto;
  }
`;

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  z-index: ${({ theme }) => theme.zIndex[100]};
  display: grid;
  place-items: center;
  gap: 1rem;
`;

export const ColorsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  ${device.xl} {
    justify-content: center;
    gap: 2rem;
  }
`;

export const ColorButton = styled.button<ColorBtn>`
  border-radius: 50%;
  background-color: ${({ hue }) => `hsl(${hue}, 70%, 65%)`};
  width: 2rem;
  height: 2rem;
  border: none;
  box-shadow: ${({ theme }) => theme.shadow.primary};
  cursor: pointer;

  ${device.xl} {
    width: 2.5;
    height: 2.5;
  }
`;

export const ColorContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const BgButton = styled.button<BgButton>`
  width: 2rem;
  height: 2rem;
  box-shadow: ${({ theme }) => theme.shadow.primary};
  cursor: pointer;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.dark}`};
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.colors.dark : theme.colors.white};
`;
