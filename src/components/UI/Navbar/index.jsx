import { useState } from "react";
import Logo from "../../../assets/icons/Logo.svg";
import Menu from "../../../assets/icons/Menu.svg";
import Close from "../../../assets/icons/Close.svg";
import { StyledNavbar, StyledLink, StyledImage, StyledMenu } from "./style";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledNavbar>
      <StyledImage src={Logo} alt="Logo..." />
      <StyledMenu src={menuOpen ? Close : Menu} onClick={handleMenuClick} />
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <StyledLink to="/characters">Characters</StyledLink>
        </li>
        <li>
          <StyledLink to="/locations">Locations</StyledLink>
        </li>
        <li>
          <StyledLink to="/episodes">Episodes</StyledLink>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
