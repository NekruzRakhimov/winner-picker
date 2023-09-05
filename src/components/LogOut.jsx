import React, {useContext} from 'react';
import {ImportContext} from "../context";
import "@mdi/font/css/materialdesignicons.min.css";

const LogOut = () => {
    const {isImported, setIsImported} = useContext(ImportContext)
    const ResetData = () => {
        setIsImported(false)
        localStorage.removeItem("isImported")
        localStorage.removeItem("excelData")
    }

    return (
        <i onClick={ResetData} className="mdi mdi-location-exit" title="Сброс данных"></i>
    );
};

export default LogOut;