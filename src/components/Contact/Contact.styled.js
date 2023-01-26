import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 50px 20px 0 20px;
  background: var(--secondary-background-color);
  padding-bottom: 25px;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0;
    margin-bottom: 40px;
  }
`;

export const ContactImg = styled.div`
  margin-bottom: 51px;

  @media screen and (min-width: 768px) {
    height: 354px;
    width: 368px;
    margin: 0;
    padding-right: 20px;
    img {
      width: 368px;
      height: 354px;
    }
  } ;
`;

export const RequestContainer = styled.div`
  width: 100%;
`;
