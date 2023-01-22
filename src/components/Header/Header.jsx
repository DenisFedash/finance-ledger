import { Container } from "../Container/Container.styled";
import { ContainerLogo, ImgLogo, List, Title } from "./Header.styled";
import Logo from "../../images/logo.svg";

export const Header = () => {
  return (
    <Container>
      <ContainerLogo>
        <Title href="">
          <ImgLogo src={Logo} alt="logo" />
          <h1>Finance Ledger</h1>
        </Title>
      </ContainerLogo>

      <List>
        <li>Home</li>
        <li>About</li>
        <li>Cases</li>
        <li>Blog</li>
        <li>Contact</li>
      </List>
    </Container>
  );
};
