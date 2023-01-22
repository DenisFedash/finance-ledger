import styled from "styled-components";
import ImgHero from "../../images/hero/hero-tablet.jpg";

export const ContainerHero = styled.div`
  background-color: black;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${ImgHero});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SectionHero = styled.div`
  padding-top: 62px;
  padding-bottom: 104px;
`;

export const HeroTitle = styled.h1`
  font-family: var(--main-font);
  color: var(--first-color);
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  text-align: center;

  padding: 0 40px 16px 40px;
  max-width: 241px;
  margin: 0 auto;
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
`;

export const AngleRight = styled.img`
  margin-right: 8px;
`;
