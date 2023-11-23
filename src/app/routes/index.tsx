import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";

import { Dashboard, Login, Lista } from "../pages";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/entrar" element={<Login />} />
                <Route path="/pagina-inicial" element={<Dashboard />} />
                <Route path="/lista" element={<Lista />} />

                <Route path="*" element={<Navigate to="pagina-inicial" />} />
            </Switch>
        </BrowserRouter>
    );
}