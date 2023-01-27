import styled from "styled-components";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow-x: hidden;
  width: 320px;
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1360px) {
    width: 1360px;
  }
`;
