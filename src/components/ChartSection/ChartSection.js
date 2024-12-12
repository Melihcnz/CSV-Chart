import React from 'react';
import Charts from '../Charts';
import '../../App.css';

const ChartSection = ({ chartData }) => (
    <>
        {chartData.data?.length > 0 && (
            <Charts 
                data={chartData.data}
                headers={chartData.headers}
            />
        )}
    </>
);

export default ChartSection;