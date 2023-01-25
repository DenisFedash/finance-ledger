import { Link } from "./NavLink.styled";

export const NavLink = ({ children, link }) => {
  return <Link href={link}>{children}</Link>;
};
