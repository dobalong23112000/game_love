import Error404 from "pages/errors/Error404";
// import Auth from "pages/Auth";
// import Home from "pages/Home";
// import Game from "pages/Game";
// import History from "pages/History";
import { lazy } from "react";
const publicRoutes = [
  { path: `/*`, component: Error404, layout: null },
  { path: `/:uuid`, component: lazy(() => import("pages/Auth")), layout: null },
  { path: `/`, component: lazy(() => import("pages/Auth")), layout: null },
];
const privateRoutes = [
  { path: `/home`, component: lazy(() => import("pages/Home")), layout: null },

  {
    path: `/history`,
    component: lazy(() => import("pages/History")),
    layout: null,
  },
  { path: `/game`, component: lazy(() => import("pages/Game")), layout: null },
];
export { publicRoutes, privateRoutes };
