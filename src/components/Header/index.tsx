import { HeaderContainer } from "./styles";

import { NavLink } from "react-router-dom";
import logoIgnite from "../../assets/logo.svg";
import { Scroll, Timer } from "phosphor-react";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
