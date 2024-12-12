import React from 'react';
import FileUploader from '../FileUploader';
import '../../App.css';

const FileUploadSection = ({ onDataLoaded }) => (
    <div className="file-upload-section">
        <h2>CSV Dosyası Yükle</h2>
        <FileUploader onDataLoaded={onDataLoaded} />
    </div>
);

export default FileUploadSection;