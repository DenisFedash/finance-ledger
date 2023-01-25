import styled from "styled-components";

export const CasesContainer = styled.div`
  padding: 56px 20px 0 20px;
  background: var(--secondary-background-color);
`;

export const CasesText = styled.p`
  color: var(--second-color);
  font-family: var(--main-font);

  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  padding-bottom: 16px;
  :last-child {
    padding-bottom: 24px;
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
`;

export const Image = styled.li`
  overflow: hidden;
  :not(:last-child) {
    margin-bottom: 8px;
  }
  :last-child {
    padding-bottom: 40px;
  }

  transition: opacity 200ms;
  &:hover,
  &:focus {
    opacity: 0.8;
    cursor: pointer;
  }
`;
