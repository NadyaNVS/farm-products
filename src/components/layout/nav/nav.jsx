import React from "react";
import { StyledButton } from "./styles";
import Button from "/src/components/ui/button/button";
import { useLocation } from "react-router-dom";
import { AppRoute } from "/src/const";
const links = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button minWidth={260} key={AppRoute.ORDER} link={AppRoute.ORDER}>
        Купить
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      {links.filter((link) => link.to !== pageUrl).map((link) => link.button)}
    </nav>
  );
}

export default Nav;
