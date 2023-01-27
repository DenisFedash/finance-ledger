import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: var(--accent-color);

  @media screen and (min-width: 768px) {
    display: flex;
  } ;
`;

export const TextContainer = styled.div`
  padding: 0 20px 79px 20px;

  @media screen and (min-width: 768px) {
    padding: 62px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 28px 86px 20px;
  } ;
`;

export const AboutImg = styled.div`
  display: flex;
  margin: 0 auto;
  padding-bottom: 79px;

  @media screen and (min-width: 768px) {
    height: 589px;
    width: 368px;
    padding: 0;
    img {
      width: 368px;
      height: 589px;
    }
  }

  @media screen and (min-width: 1360px) {
    height: 460px;
    width: 670px;
    padding: 0;
    img {
      width: 670px;
      height: 460px;
    }
  } ;
`;

export const AboutText = styled.p`
  color: var(--first-color);
  font-family: var(--main-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 16px;
  :not(:first-child) {
    padding-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  } ;
`;

export const AboutTitle = styled.h2`
  color: var(--first-color);
  font-family: var(--main-font);
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  padding-bottom: 24px;

  @media screen and(min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const AboutButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--first-color);
  color: var(--first-color);

  padding: 16px 32px;

  cursor: pointer;
  transition: all 250ms;

  &:hover,
  &:focus {
    background-color: var(--first-color);
    color: var(--accent-color);
  }
`;
