import { Outlet, useNavigate } from "react-router";

import { Badge, Button, Icon, IconButton, Navs, Spinner } from "@entities";
import { TopBar } from "@features";
import { cn, FilmIcon, ROUTES, useAppSelector } from "@shared";

const favoritesPath = `/${ROUTES.FAVORITES}`;
const watchLaterPath = `/${ROUTES.WATCH_LATER}`;

const block = cn('layout');

export function Layout() {
  const favorites = useAppSelector(state => state.favorites.movieList);
  const watchLater = useAppSelector((state) => state.watchLater.movieList);
  const navigate = useNavigate();

  return (
    <div className={block(null, ['container'])}>
      <TopBar className={block('top-bar')}>
        <IconButton color="default" onClick={() => navigate(ROUTES.HOME)} aria-label="Home Logo">
          <Icon size={28} onClick={() => navigate(ROUTES.HOME)}>
            <FilmIcon />
          </Icon>
        </IconButton>

        <Navs 
          className={block('nav-items-container')}
          paths={[favoritesPath, watchLaterPath]}
          buttons={[
            <Button
              variant="text"
              color="default"
              size="s"
              component="span"
              endIcon={
                <Badge
                  className={block('badge')}
                  variant="default-light"
                >
                  {favorites.length}
                </Badge>
              }
              Spinner={Spinner}
            >
              Favorite
            </Button>,
            <Button
              variant="text"
              color="default"
              size="s"
              component="span"
              endIcon={
                <Badge className={block('badge')} variant="default-light">
                  {watchLater.length}
                </Badge>
              }
            >
              Watch Later
            </Button>
          ]}
        >
        </Navs>
      </TopBar>

      <main className={block('main')}>
        <Outlet />
      </main>
    </div>
  );
};
