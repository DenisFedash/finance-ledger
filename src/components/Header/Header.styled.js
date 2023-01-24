import styled from "styled-components";

export const ContainerHeader = styled.div`
  padding: 20px 20px 20px 20px;
`;

export const ContainerLogo = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

export const Title = styled.a`
  display: flex;
`;

export const NameFirst = styled.span`
  color: var(--accent-color);
  margin-right: 8px;
  font-family: var(--main-font);
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
`;

export const NameSecond = styled.span`
  color: var(--first-color);
  font-family: var(--main-font);
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  /* & :not(:last-child) {
    margin-right: 12px;
  } */
`;

export const Link = styled.li`
  font-family: var(--main-font);
  color: var(--first-color);
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

export const ImgLogo = styled.img`
  margin-right: 8px;
  width: 39px;
  height: 31px;
`;
