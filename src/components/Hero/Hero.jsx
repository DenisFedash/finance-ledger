import { Container } from "../Container/Container.styled";

import {
  AngleRight,
  ContainerHero,
  HeroButton,
  HeroText,
  HeroTitle,
  SectionHero,
} from "./Hero.styled";
import Angle from "../../images/angle-right.svg";

export const Hero = () => {
  return (
    <Container>
      <ContainerHero>
        <SectionHero>
          <HeroTitle>The Sky Is The Limit</HeroTitle>
          <HeroText>We provide world class financial assistance</HeroText>
          <HeroButton type="button">
            <AngleRight src={Angle} alt="angle-right" width={9} height={18} />
            Read More
          </HeroButton>
        </SectionHero>
      </ContainerHero>
    </Container>
  );
};
