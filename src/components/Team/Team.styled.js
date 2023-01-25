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
`;

export const TeamItem = styled.li`
  position: relative;
  :not(:last-child) {
    margin-bottom: 30px;
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
`;

export const TeamWrapper = styled.div`
  background-color: black;
  opacity: 0.6;
  position: absolute;
  width: 100%;
  height: 100%;
`;
