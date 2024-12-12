import React, { useState } from 'react';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import FileUploadSection from './components/FileUploadSection/FileUploadSection';
import ChartSection from './components/ChartSection/ChartSection';
import { processCSVData } from './utils/csvDataProcessor';
import './App.css';

function CSVDashboardApp() {
    const [csvChartData, setCSVChartData] = useState({
        data: [],
        headers: []
    });

    const handleCSVDataLoad = (rawData) => {
        const processedData = processCSVData(rawData);
        if (processedData) {
            setCSVChartData({
                data: processedData,
                headers: Object.keys(rawData[0] || {})
            });
        }
    };

    return (
        <div className="dashboard-container">
            <DashboardHeader />
            <FileUploadSection onDataLoaded={handleCSVDataLoad} />
            <ChartSection chartData={csvChartData} />
        </div>
    );
}

export default CSVDashboardApp;  
