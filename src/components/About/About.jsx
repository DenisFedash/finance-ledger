import { Container } from "../Container/Container.styled";
import About1x from "../../images/about/about-mobile.webp";
import About2x from "../../images/about/about-mobile@2x.webp";
import About3x from "../../images/about/about-mobile@3x.webp";
import {
  AboutButton,
  AboutContainer,
  AboutImg,
  AboutText,
  AboutTitle,
  TextContainer,
} from "./About.styled";

export const About = () => {
  return (
    <Container>
      <AboutContainer>
        <AboutImg
          type="image/webp"
          src={About1x}
          srcSet={`${About1x} 1x, ${About2x} 2x, ${About3x} 3x`}
          media="(max-width: 767px)"
        />
        <TextContainer>
          <AboutText>What you are looking for</AboutText>
          <AboutTitle>We provide bespoke solutions</AboutTitle>
          <AboutText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </AboutText>
          <AboutButton type="button">Read More</AboutButton>
        </TextContainer>
      </AboutContainer>
    </Container>
  );
};
