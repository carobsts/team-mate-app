import Home from "../../pages/home/Home";
import { paths } from "./paths";

export const privateRoutes: any[] = [
    {
        path: paths.home.root,
        Component: <Home/>
    },
    {
        path: paths.settings.root,
        Component: <div> Configuraciones </div>
    }
];