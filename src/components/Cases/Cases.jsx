import { Container } from "../Container/Container.styled";
import { CasesContainer, CasesText, CasesTitle } from "./Cases.styled";

export const Cases = () => {
  return (
    <Container>
      <CasesContainer>
        <CasesText>This is what we do</CasesText>
        <CasesTitle>Business Cases</CasesTitle>
        <CasesText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </CasesText>
      </CasesContainer>
    </Container>
  );
};
