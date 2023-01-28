import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsArrowReturnLeft } from "react-icons/bs";

export const ModalWindow = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  active {
    transform: scale(1);
  }
`;

export const ModalTitle = styled.p`
  font-family: "OpenSansSemiBold";
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 8px;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 310px;
  background-color: white;
  border: 2px solid tomato;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const BackLink = styled(AnchorLink)`
  color: var(--accent-color);
  text-decoration: none;
  &:hover,
  &:focus {
    color: var(--second-color);
    fill: var(--second-color);
  }
`;

export const ArrowBack = styled(BsArrowReturnLeft)`
  vertical-align: middle;
  margin-right: 5px;
  align-items: center;
  fill: var(--accent-color);
  &:hover,
  &:focus {
    color: var(--second-color);
    fill: var(--second-color);
  }
`;
