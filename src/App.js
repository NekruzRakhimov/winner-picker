import React, {useContext, useEffect, useState} from "react";
import {ImportContext} from "./context";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import LogOut from "./components/LogOut";
import "./styles/App.css";


function App() {
    // localStorage.setItem("isImported", "false")
    const [isImported, setIsImported] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("isImported")) {
            setIsImported(true)
        }
    }, []);



    return (
        <div className="app-wrapper">
            <ImportContext.Provider value={{
                isImported,
                setIsImported
            }}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </ImportContext.Provider>
        </div>

    );
}

export default App;
