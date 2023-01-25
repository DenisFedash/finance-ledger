import styled from "styled-components";

export const Link = styled.a`
  font-family: var(--main-font);
  color: var(--first-color);
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  position: relative;
  &:hover,
  &:focus,
  &:active {
    &::before {
      content: "";
      border-bottom: 2px solid var(--second-accent-color);
      position: absolute;
      width: 160%;
      height: 150%;
      transform: translate(-18%);
    }
  }
`;
