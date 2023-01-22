import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: var(--accent-color);
`;

export const TextContainer = styled.div`
  padding: 0 20px 79px 20px;
  margin-bottom: 56px;
`;

export const AboutImg = styled.img`
  display: flex;
  margin: 0 auto;
  padding-bottom: 79px;
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
`;

export const AboutTitle = styled.h2`
  color: var(--first-color);
  font-family: var(--main-font);
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  padding-bottom: 24px;
`;

export const AboutButton = styled.button`
  background-color: var(--accent-color);
  border-radius: 5px;
  border: 1px solid var(--first-color);
  color: var(--first-color);

  padding: 16px 32px;
`;
