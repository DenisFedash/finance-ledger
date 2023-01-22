import {
  ContainerHeader,
  ContainerLogo,
  ImgLogo,
  Link,
  List,
  NameFirst,
  NameSecond,
} from "./Header.styled";
import Logo from "../../images/logo.svg";

export const Header = () => {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <ImgLogo src={Logo} alt="logo" />
        <NameFirst>Finance</NameFirst>
        <NameSecond>Ledger</NameSecond>
      </ContainerLogo>

      <List>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Cases</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
      </List>
    </ContainerHeader>
  );
};
