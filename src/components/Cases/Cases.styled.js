import styled from "styled-components";

export const CasesContainer = styled.div`
  padding: 56px 20px 40px 20px;
  background: var(--secondary-background-color);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 48px 32px 40px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 48px 28px 70px 28px;
  } ;
`;

export const CasesText = styled.p`
  color: var(--second-color);
  font-family: var(--main-font);

  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  :not(:last-child) {
    padding-bottom: 16px;
  }

  :last-child {
    padding-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    :last-child {
      padding-bottom: 30px;
    }
  }
`;

export const CasesTitle = styled.h2`
  color: var(--second-color);
  font-family: var(--main-font);

  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  padding-bottom: 24px;
  max-width: 219px;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 54px;
    max-width: 284px;
  }
`;

export const CasesList = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 148px;
    grid-column-gap: 17px;
    grid-row-gap: 18px;
  }
  @media screen and (min-width: 1360px) {
    grid-auto-rows: 282px;
    /* grid-column-gap: 20px; */
    grid-row-gap: 24px;
  }
`;

export const Image = styled.li`
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    width: 223px;
    height: 148px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1360px) {
    width: 424px;
    height: 282px;
  }

  transition: opacity 200ms;
  &:hover,
  &:focus {
    opacity: 0.8;
    cursor: pointer;
  }
`;
