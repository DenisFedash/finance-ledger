import styled from "styled-components";

export const BlogContainer = styled.div`
  background-color: var(--second-accent-color);
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  } ;
`;

export const BlogImage = styled.div`
  padding-bottom: 48px;

  @media screen and (min-width: 768px) {
    height: 493px;
    width: 368px;
    padding: 0;
    img {
      width: 368px;
      height: 493px;
    }
  } ;
`;

export const BlogTextContainer = styled.div`
  padding: 0 20px 58px 20px;

  @media screen and (min-width: 768px) {
    padding: 59px 32px;
  } ;
`;

export const BlogButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--first-color);
  color: var(--first-color);

  padding: 16px 32px;

  cursor: pointer;
  transition: all 250ms;

  &:hover,
  &:focus {
    background-color: var(--first-color);
    color: var(--second-accent-color);
  }
`;
