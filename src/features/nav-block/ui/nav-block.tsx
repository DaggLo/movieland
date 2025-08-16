import { NavLink } from "react-router";

import { Badge, Button, Spinner } from "@entities";
import { cn, ROUTES, useAppSelector } from "@shared";
import { type NavsProps } from "../lib";

const favoritesPath = `/${ROUTES.FAVORITES}`;
const watchLaterPath = `/${ROUTES.WATCH_LATER}`;

const block = cn("nav-block");

export function NavBlock({ className }: NavsProps) {
  const favorites = useAppSelector((state) => state.favorites.movieList);
  const watchLater = useAppSelector((state) => state.watchLater.movieList);

  return (
    <div className={block(null, [className])}>
      <NavLink
        className={({ isActive }) => block("item", { active: isActive })}
        to={favoritesPath}
      >
        <Button
          badge={<Badge className={block("badge")}>{favorites.length}</Badge>}
          className={block("button")}
          spinner={
            <Spinner
              className={block("spinner", { size: "s", color: "default" })}
            />
          }
        >
          Favorites
        </Button>
      </NavLink>

      <NavLink
        className={({ isActive }) => block("item", { active: isActive })}
        to={watchLaterPath}
      >
        <Button
          badge={<Badge className={block("badge")}>{watchLater.length}</Badge>}
          className={block("button")}
          spinner={
            <Spinner
              className={block("spinner", { size: "s", color: "default" })}
            />
          }
        >
          Watch Later
        </Button>
      </NavLink>
    </div>
  );
}
