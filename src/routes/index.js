import Error404 from 'pages/errors/Error404';
import Auth from 'pages/Auth'
import Home from 'pages/Home';
import Game from 'pages/Game';
const publicRoutes = [
    { path: `/*`, component: Error404, layout: null },
    { path: `/auth`, component: Auth, layout: null },
    { path: `/`, component: Home, layout: null },
    { path: `/game`, component: Game, layout: null },
]
const privateRoutes = [
   
]
export { publicRoutes, privateRoutes }