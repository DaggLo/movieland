import { useNavigate } from "react-router";

import { Icon, IconButton, ThemeToggle, TopBar, useTheme } from "@entities";
import { NavBlock } from "@features";
import { cn, FilmIcon, ROUTES } from "@shared";

const block = cn("header");

export const Header = () => {
  const navigate = useNavigate();
  const handleOnClick = () => navigate(ROUTES.HOME);
  const { theme, toggleTheme } = useTheme();

  return (
    <TopBar className={block()}>
      <IconButton
        color="default"
        className={block("icon-button")}
        onClick={() => navigate(ROUTES.HOME)}
        aria-label="Home Logo"
      >
        <Icon className={block("icon")} onClick={handleOnClick} size={28}>
          <FilmIcon />
        </Icon>
      </IconButton>

      <NavBlock className={block("nav-items-container")}></NavBlock>

      <ThemeToggle
        className={block("theme-toggle")}
        theme={theme}
        toggleTheme={toggleTheme}
      ></ThemeToggle>
    </TopBar>
  );
};
