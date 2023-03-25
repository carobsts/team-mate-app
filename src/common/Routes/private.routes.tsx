import Championship from "../../pages/championship/Championship";
import Home from "../../pages/home/Home";
import Players from "../../pages/settings/components/Players";
import Settings from "../../pages/settings/Settings";
import Training from "../../pages/training/Training";
import { paths } from "./paths";

export const privateRoutes: any[] = [
    {
        path: paths.home.root,
        Component: <Home/>
    },
    {
        path: paths.settings.root,
        Component: <Settings/>
    },
    {
        path: paths.training.root,
        Component: <Training/>
    },
    {
        path: paths.championship.root,
        Component: <Championship/>
    },
    { 
        path: paths.settings.football_player_creation,
        Component: <Players/>
    }
];