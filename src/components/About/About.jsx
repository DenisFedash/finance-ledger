import { Container } from "../Container/Container.styled";
import peopleJpg from "../../images/home/people.jpg";
import peopleWebp from "../../images/home/people.webp";
import people2xJpg from "../../images/home/people@2x.jpg";
import people2xWebp from "../../images/home/people@2x.webp";
import {
  AboutButton,
  AboutContainer,
  AboutImg,
  AboutText,
  AboutTitle,
  TextContainer,
} from "./About.styled";
import { Picture } from "../../utils/Picture/Picture";

export const About = () => {
  return (
    <Container>
      <AboutContainer>
        <AboutImg>
          <Picture
            jpg1x={peopleJpg}
            jpg2x={people2xJpg}
            webp1x={peopleWebp}
            webp2x={people2xWebp}
          />
        </AboutImg>
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
