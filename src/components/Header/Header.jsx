import {
  ContainerHeader,
  HeaderBackground,
  HeaderNav,
  ImgLogo,
  List,
  LogoLink,
  NameFirst,
  NameSecond,
} from "./Header.styled";
import Logo from "../../images/logo.svg";
import { NavLink } from "../../utils/NavLink/NavLink";
import { Container } from "../Container/Container.styled";
import { useState } from "react";

const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const Header = () => {
  const [visible, setVisible] = useState({ opacity: "0" });

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 120) {
      setVisible({ opacity: "0.8" });
    } else if (scrolled <= 120) {
      setVisible({ opacity: "0" });
    }
  };

  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector(".scrollto").offsetHeight;

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", toggleVisible);
  return (
    <Container>
      <ContainerHeader className="scrollto">
        <HeaderBackground style={visible} />
        <LogoLink onClick={scrollToTop} href="">
          <ImgLogo src={Logo} alt="logo" />
          <NameFirst>
            Finance
            <NameSecond>Ledger</NameSecond>
          </NameFirst>
        </LogoLink>

        <HeaderNav>
          <List>
            <li>
              <NavLink link="#home">Home</NavLink>
            </li>
            <li>
              <NavLink link="#about">About</NavLink>
            </li>
            <li>
              <NavLink link="#cases">Cases</NavLink>
            </li>
            <li>
              <NavLink link="#blog">Blog</NavLink>
            </li>
            <li>
              <NavLink link="#contact">Contact</NavLink>
            </li>
          </List>
        </HeaderNav>
      </ContainerHeader>
    </Container>
  );
};
