import { createBrowserRouter } from 'react-router';

import { ROUTES } from "@shared";
import { Layout } from "@pages";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: {
          Component: async () => (await import("@widgets")).Home,
        },
      },
      {
        path: ROUTES.FAVORITES,
        lazy: {
          Component: async () => (await import("@widgets")).Favorites,
        },
      },
      {
        path: ROUTES.WATCH_LATER,
        lazy: {
          Component: async () => (await import("@widgets")).WatchLater,
        },
      },
    ],
  },
  {
    path: ROUTES.OTHERS,
    lazy: {
      Component: async () => (await import("@widgets")).PageNotFound,
    },
  },
]);
