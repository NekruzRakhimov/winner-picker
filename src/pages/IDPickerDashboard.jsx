import React, {useEffect, useState} from 'react';
import IDsList from "../components/IDsList";
import IDPicker from "../components/IDPicker";
import PickedIDsList from "../components/PickedIDsList";
import LogOut from "../components/LogOut";
import "./IDPickerDashboard.css"
import "@mdi/font/css/materialdesignicons.min.css"
import Settings from "../components/Settings";
import Ball from "../components/Ball";

const IDPickerDashboard = () => {
    const [data, setData] = useState([]);
    const [randomItem, setRandomItem] = useState(null);
    const [generatedNumbers, setGeneratedNumbers] = useState([]);

    const OnLoaded = (list) => {
        setGeneratedNumbers(list)
    }

    useEffect(() => {
        const storedString = localStorage.getItem('excelData');
        setData(JSON.parse(storedString));
    }, []);

    return (
        <div className="id-picker-container">
            <div className="id-picker-header">
                <i className="mdi mdi-dice-6"></i>
                <h3 style={{marginLeft: "16px", marginRight: "auto", color: "white"}}>
                    Formula
                    <span style={{"color": "gold"}}>55</span>
                </h3>
                <LogOut />
                <Settings />
            </div>

            <div className="id-picker-content">
                <div className="id-picker-content-main">
                    <IDPicker list={data} onLoaded={OnLoaded}/>
                </div>
                <div className="separator-v"></div>
                <div className="id-picker-content-side">
                    <div className="side-ids-list">
                        <div className="side-ids-list-header">
                            Участники
                        </div>
                        {/*<div className="separator-h"></div>*/}
                        <div className="side-ids-list-content">
                        <IDsList list={data}/>

                        </div>
                    </div>
                    {/*<div className="separator-h"></div>*/}
                    <div className="side-ids-list side-picked-ids-list">
                        <div className="side-ids-list-header">
                            Победители
                        </div>
                        {/*<div className="separator-h"></div>*/}
                        <div className="side-ids-list-content">
                        <PickedIDsList list={generatedNumbers}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IDPickerDashboard;