import styled from "styled-components";
import showcaseJpg from "../../images/home/showcase.jpg";
import showcase2xJpg from "../../images/home/showcase@2x.jpg";

export const ContainerHero = styled.div`
  background-color: black;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${showcaseJpg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${showcase2xJpg});
  }
`;

export const SectionHero = styled.div`
  padding-top: 142px;
  padding-bottom: 104px;

  @media screen and (min-width: 768px) {
    padding-top: 378px;
    padding-bottom: 378px;
  } ;
`;

export const HeroTitle = styled.h2`
  font-family: var(--main-font);
  color: var(--first-color);
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  text-align: center;

  padding: 0 40px 16px 40px;
  max-width: 241px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 55px;
    line-height: 75px;

    max-width: 523px;
  }
`;

export const HeroText = styled.p`
  font-family: var(--main-font);
  color: var(--first-color);
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  text-align: center;

  padding-bottom: 24px;
  max-width: 280px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;

    max-width: 523px;
  } ;
`;

export const HeroButton = styled.button`
  font-family: var(--main-font);
  color: var(--first-color);
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;

  display: flex;
  margin: 0 auto;
  padding: 16px 32px;
  border: transparent;
  border-radius: 5px;
  background-color: var(--accent-color);
  align-items: center;

  cursor: pointer;
  transition: opacity 250ms;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const AngleRight = styled.img`
  margin-right: 8px;
`;
