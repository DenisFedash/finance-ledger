import styled from "styled-components";

export const CasesContainer = styled.div`
  padding: 0 20px;
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
