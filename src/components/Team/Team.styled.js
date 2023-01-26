import styled from "styled-components";

export const TeamContainer = styled.div`
  padding: 72px 20px 0 20px;
  background: var(--secondary-background-color);
`;

export const TeamText = styled.p`
  color: var(--second-color);
  font-family: var(--main-font);

  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  :not(:last-child) {
    margin-bottom: 16px;
  }
  :last-child {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 33px;
  } ;
`;

export const TeamTitle = styled.h2`
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
    max-width: 427px;
  } ;
`;

export const TeamList = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 17px;
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 1360px) {
    grid-column-gap: 19px;
  }
`;

export const TeamItem = styled.li`
  position: relative;
  :not(:last-child) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    height: fit-content;
  }
`;

export const TeamImg = styled.div`
  margin-bottom: 16px;
  overflow: hidden;
  height: 176px;
  position: relative;

  z-index: 1;

  transition: all 250ms;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.4);
  }

  @media screen and (min-width: 768px) {
    width: 223px;
    height: 148px;
    margin-bottom: 14px;
  }
  @media screen and (min-width: 1360px) {
    width: 424px;
    height: 284px;
    margin-bottom: 20px;
  }
`;

export const TeamName = styled.h3`
  color: var(--second-color);
  font-family: var(--main-font);
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;

  margin-bottom: 8px;
`;

export const TeamPosition = styled.p`
  color: var(--second-color);
  font-family: var(--main-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;

export const TeamListSocial = styled.div`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  height: 100%;
  transition: opacity 250ms;
  display: flex;
  align-items: center;
  fill: var(--first-color);
  padding-left: 30px;
  padding-right: 30px;
  &:hover {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 1360px) {
    padding-left: 103px;
    padding-right: 103px;
  }
`;

export const TeamWrapper = styled.div`
  background-color: black;
  opacity: 0.6;
  position: absolute;
  width: 100%;
  height: 100%;
`;
