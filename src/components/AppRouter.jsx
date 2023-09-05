import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {ImportContext} from "../context";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    const {isImported, setIsImported} = useContext(ImportContext)
    // const isImported = localStorage.getItem("isImported")
    console.log(isImported)
    return (
        isImported
            ?
            <Routes>
                {/*<Route*/}
                {/*    path="/*"*/}
                {/*    element={<Navigate to="/dashboard"/>}*/}
                {/*/>*/}
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                )}

            </Routes>
            : <Routes>
                {/*<Route*/}
                {/*    path="/*"*/}
                {/*    element={<Navigate to="/excel_importer"/>}*/}
                {/*/>*/}
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                )}

            </Routes>
    );
};

export default AppRouter;