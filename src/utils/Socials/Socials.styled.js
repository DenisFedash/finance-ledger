import styled from "styled-components";

export const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SocialItem = styled.li`
  width: 35px;
  height: 35px;
  :not(:last-child) {
    margin-right: 25px;
  }

  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-right: 15px;
    }
  } ;
`;

export const SocialLink = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialSvg = styled.svg`
  margin-right: 6px;
  transition: fill 250ms;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    fill: var(--accent-color);
  }
`;
