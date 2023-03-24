import Championship from "../../pages/championship/Championship";
import Home from "../../pages/home/Home";
import Training from "../../pages/training/Training";
import { paths } from "./paths";

export const privateRoutes: any[] = [
    {
        path: paths.home.root,
        Component: <Home/>
    },
    {
        path: paths.settings.root,
        Component: <div> Configuraciones </div>
    },
    {
        path: paths.training.root,
        Component: <Training/>
    },
    {
        path: paths.championship.root,
        Component: <Championship/>
    }
];