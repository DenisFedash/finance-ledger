import styled from "styled-components";

export const ContainerHeader = styled.div`
  padding: 20px 0;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }
`;

export const LogoLink = styled.a`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 250ms;
  z-index: 5;
  padding: 0 20px;

  &:hover,
  &:focus {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
`;

export const NameFirst = styled.h1`
  color: var(--accent-color);

  font-family: var(--main-font);
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;

  width: min-content;
  z-index: 5;

  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 35px;
    line-height: 48px;
  } ;
`;

export const NameSecond = styled.span`
  color: var(--first-color);
  font-family: var(--main-font);
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 35px;
    line-height: 48px;
  } ;
`;

export const HeaderNav = styled.nav`
  z-index: 5;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const NavItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const ImgLogo = styled.img`
  margin-right: 8px;
  width: 39px;
  height: 31px;
`;

export const HeaderBackground = styled.div`
  transition: opacity 250ms;
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  left: 0;
  top: 0;
`;
