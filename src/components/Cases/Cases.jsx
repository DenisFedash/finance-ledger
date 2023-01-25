import { Container } from "../Container/Container.styled";
import { CasesContainer, CasesText, CasesTitle, Image } from "./Cases.styled";
import cases1Jpg from "../../images/cases/cases1.jpg";
import cases1Webp from "../../images/cases/cases1.webp";
import cases1Jpg2x from "../../images/cases/cases1@2x.jpg";
import cases1Webp2x from "../../images/cases/cases1@2x.webp";
import cases2Jpg from "../../images/cases/cases2.jpg";
import cases2Webp from "../../images/cases/cases2.webp";
import cases2Jpg2x from "../../images/cases/cases2@2x.jpg";
import cases2Webp2x from "../../images/cases/cases2@2x.webp";
import cases3Jpg from "../../images/cases/cases3.jpg";
import cases3Webp from "../../images/cases/cases3.webp";
import cases3Jpg2x from "../../images/cases/cases3@2x.jpg";
import cases3Webp2x from "../../images/cases/cases3@2x.webp";
import cases4Jpg from "../../images/cases/cases4.jpg";
import cases4Webp from "../../images/cases/cases4.webp";
import cases4Jpg2x from "../../images/cases/cases4@2x.jpg";
import cases4Webp2x from "../../images/cases/cases4@2x.webp";
import cases5Jpg from "../../images/cases/cases5.jpg";
import cases5Webp from "../../images/cases/cases5.webp";
import cases5Jpg2x from "../../images/cases/cases5@2x.jpg";
import cases5Webp2x from "../../images/cases/cases5@2x.webp";
import cases6Jpg from "../../images/cases/cases6.jpg";
import cases6Webp from "../../images/cases/cases6.webp";
import cases6Jpg2x from "../../images/cases/cases6@2x.jpg";
import cases6Webp2x from "../../images/cases/cases6@2x.webp";
import cases7Jpg from "../../images/cases/cases7.jpg";
import cases7Webp from "../../images/cases/cases7.webp";
import cases7Jpg2x from "../../images/cases/cases7@2x.jpg";
import cases7Webp2x from "../../images/cases/cases7@2x.webp";
import cases8Jpg from "../../images/cases/cases8.jpg";
import cases8Webp from "../../images/cases/cases8.webp";
import cases8Jpg2x from "../../images/cases/cases8@2x.jpg";
import cases8Webp2x from "../../images/cases/cases8@2x.webp";
import { Picture } from "../../utils/Picture/Picture";

export const Cases = () => {
  return (
    <Container>
      <CasesContainer id="cases">
        <CasesText>This is what we do</CasesText>
        <CasesTitle>Business Cases</CasesTitle>
        <CasesText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </CasesText>
        <ul>
          <Image>
            <a href={cases1Jpg2x} data-lightbox="roadtrip">
              <Picture
                jpg1x={cases1Jpg}
                jpg2x={cases1Webp}
                webp1x={cases1Jpg2x}
                webp2x={cases1Webp2x}
              />
            </a>
          </Image>
          <Image>
            <a href={cases2Jpg2x} data-lightbox="roadtrip">
              <Picture
                jpg1x={cases2Jpg}
                jpg2x={cases2Webp}
                webp1x={cases2Jpg2x}
                webp2x={cases2Webp2x}
              />
            </a>
          </Image>
          <Image>
            <a href={cases3Jpg2x} data-lightbox="croadtrip">
              <Picture
                jpg1x={cases3Jpg}
                jpg2x={cases3Webp}
                webp1x={cases3Jpg2x}
                webp2x={cases3Webp2x}
              />
            </a>
          </Image>
          <Image>
            <a href={cases4Jpg2x} data-lightbox="roadtrip">
              <Picture
                jpg1x={cases4Jpg}
                jpg2x={cases4Webp}
                webp1x={cases4Jpg2x}
                webp2x={cases4Webp2x}
              />
            </a>
          </Image>
          <Image>
            <a href={cases5Jpg2x} data-lightbox="roadtrip">
              <Picture
                jpg1x={cases5Jpg}
                jpg2x={cases5Webp}
                webp1x={cases5Jpg2x}
                webp2x={cases5Webp2x}
              />
            </a>
          </Image>
          <Image>
            <a href={cases6Jpg2x} data-lightbox="roadtrip">
              <Picture
                jpg1x={cases6Jpg}
                jpg2x={cases6Webp}
                webp1x={cases6Jpg2x}
                webp2x={cases6Webp2x}
              />
            </a>
          </Image>
          <Image>
            <a href={cases7Jpg2x} data-lightbox="roadtrip">
              <Picture
                jpg1x={cases7Jpg}
                jpg2x={cases7Webp}
                webp1x={cases7Jpg2x}
                webp2x={cases7Webp2x}
              />
            </a>
          </Image>
          <Image>
            <a href={cases8Jpg2x} data-lightbox="roadtrip">
              <Picture
                jpg1x={cases8Jpg}
                jpg2x={cases8Webp}
                webp1x={cases8Jpg2x}
                webp2x={cases8Webp2x}
              />
            </a>
          </Image>
        </ul>
      </CasesContainer>
    </Container>
  );
};
