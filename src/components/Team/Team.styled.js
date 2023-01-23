import styled from "styled-components";

export const TeamContainer = styled.div`
  padding: 0 20px;
`;

export const TeamText = styled.p`
  color: var(--second-color);
  font-family: var(--main-font);

  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  padding-bottom: 16px;
  :last-child {
    padding-bottom: 63px;
  }
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
  :not(:last-child) {
    margin-bottom: 30px;
  }

  :last-child {
    margin-bottom: 51px;
  }
`;

export const TeamImg = styled.div`
  margin-bottom: 16px;
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
