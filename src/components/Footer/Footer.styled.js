import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: var(--second-color);
`;

export const FooterSocials = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  fill: var(--first-color);
`;

export const FooterText = styled.div`
  font-family: var(--main-font);
  color: var(--first-color);

  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  padding-bottom: 20px;
`;
