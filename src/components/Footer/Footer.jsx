import { Socials } from "../../utils/Socials/Socials";

import { Container } from "../Container/Container.styled";
import { FooterContainer, FooterSocials, FooterText } from "./Footer.styled";

export const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <FooterSocials>
          <Socials />
        </FooterSocials>
        <FooterText>Copyright © 2021 - FinanceLedger</FooterText>
      </FooterContainer>
    </Container>
  );
};
