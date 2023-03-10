import person1Jpg from "../../images/team/person1.jpg";
import person1Webp from "../../images/team/person1.webp";
import person1Jpg2x from "../../images/team/person1@2x.jpg";
import person1Webp2x from "../../images/team/person1@2x.webp";
import person2Jpg from "../../images/team/person2.jpg";
import person2Webp from "../../images/team/person2.webp";
import person2Jpg2x from "../../images/team/person2@2x.jpg";
import person2Webp2x from "../../images/team/person2@2x.webp";
import person3Jpg from "../../images/team/person3.jpg";
import person3Webp from "../../images/team/person3.webp";
import person3Jpg2x from "../../images/team/person3@2x.jpg";
import person3Webp2x from "../../images/team/person3@2x.webp";
import { Picture } from "../../utils/Picture/Picture";
import { Socials } from "../../utils/Socials/Socials";
import { Container } from "../Container/Container.styled";
import {
  TeamContainer,
  TeamImg,
  TeamItem,
  TeamList,
  TeamListSocial,
  TeamName,
  TeamPosition,
  TeamText,
  TeamTitle,
  TeamWrapper,
} from "./Team.styled";

export const Team = () => {
  return (
    <Container>
      <TeamContainer>
        <div>
          <TeamText>Who we are</TeamText>
          <TeamTitle>Our Professional Team</TeamTitle>
          <TeamText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </TeamText>
        </div>
        <TeamList>
          <TeamItem>
            <TeamImg>
              <TeamListSocial>
                <Socials />
              </TeamListSocial>
              <Picture
                jpg1x={person1Jpg}
                jpg2x={person1Webp}
                webp1x={person1Jpg2x}
                webp2x={person1Webp2x}
              />
              <TeamWrapper />
            </TeamImg>

            <TeamName>John Doe</TeamName>
            <TeamPosition>Vice President</TeamPosition>
          </TeamItem>
          <TeamItem>
            <TeamImg>
              <TeamListSocial>
                <Socials />
              </TeamListSocial>
              <Picture
                jpg1x={person2Jpg}
                jpg2x={person2Webp}
                webp1x={person2Jpg2x}
                webp2x={person2Webp2x}
              />
              <TeamWrapper />
            </TeamImg>

            <TeamName>Jane Doe</TeamName>
            <TeamPosition>President</TeamPosition>
          </TeamItem>
          <TeamItem>
            <TeamImg>
              <TeamListSocial>
                <Socials />
              </TeamListSocial>
              <Picture
                jpg1x={person3Jpg}
                jpg2x={person3Webp}
                webp1x={person3Jpg2x}
                webp2x={person3Webp2x}
              />
              <TeamWrapper />
            </TeamImg>

            <TeamName>Steve Smith</TeamName>
            <TeamPosition>Marketing Head</TeamPosition>
          </TeamItem>
        </TeamList>
      </TeamContainer>
    </Container>
  );
};
