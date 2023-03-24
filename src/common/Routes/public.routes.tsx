import Login from "../../pages/login/Login";
import { paths } from "./paths";

export const publicRoutes: any[] = [
    {
        path: paths.login.root,
        Component: <Login/>
    }
];