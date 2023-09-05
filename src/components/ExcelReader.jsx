import React, {useContext} from 'react';
import {useDropzone} from 'react-dropzone';
import * as XLSX from 'xlsx';
import {ImportContext} from "../context"; // Обратите внимание на изменение импорта

function ExcelReader() {
    const {setIsImported} = useContext(ImportContext)


    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const binaryData = e.target.result;
            const workbook = XLSX.read(binaryData, {type: 'binary'});
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const excelData = XLSX.utils.sheet_to_json(worksheet, {header: 'A', raw: false});

            setIsImported(true);
            const jsonString = JSON.stringify(excelData);
            localStorage.setItem('excelData', jsonString);
            localStorage.setItem("isImported", "true")

        };

        reader.readAsBinaryString(file);
    };

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    return (
        <>
            <div className="droparea-container">
                <h5 className="droparea-title">Вставьте файл с ID-участников</h5>
                <div {...getRootProps()} className="droparea">
                    <input {...getInputProps()} />
                    <p>Перетащите сюда файл Excel или кликните для загрузки.</p>
                </div>
            </div>
        </>
    );
}

const dropzoneStyle = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    width: '300px',
    height: '300px',
    textAlign: 'center',
    cursor: 'pointer',
};

export default ExcelReader;
