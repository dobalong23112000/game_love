// import Error404 from "pages/errors/Error404";
import Auth from "pages/Auth";
import Home from "pages/Home";
import Game from "pages/Game";
import History from "pages/History";
import LoadSpash from "pages/LoadSpash/LoadSpash";

const publicRoutes = [
  { path: `/*`, component: LoadSpash, layout: null },
  { path: `/:uuid`, component: Auth, layout: null },
  // { path: `/`, component: Auth, layout: null },
];
const privateRoutes = [
  { path: `/home`, component: Home, layout: null },

  {
    path: `/history`,
    component: History,
    layout: null,
  },
  { path: `/game`, component: Game, layout: null },
];
export { publicRoutes, privateRoutes };
