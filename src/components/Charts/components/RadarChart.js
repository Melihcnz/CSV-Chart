import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import InfoBox from './InfoBox';

const CustomRadarChart = ({ data, header }) => {
    // Veriyi marka bazında grupla ve ortalamaları al
    const processedData = Object.values(data.reduce((acc, item) => {
        if (!acc[item.name]) {
            acc[item.name] = {
                name: item.name,
                totalScore: 0,
                count: 0
            };
        }
        acc[item.name].totalScore += parseFloat(item[header]) || 0;
        acc[item.name].count += 1;
        return acc;
    }, {})).map(item => ({
        name: item.name,
        [header]: (item.totalScore / item.count).toFixed(2)
    }));

    // Genel ortalama hesapla
    const averageScore = (processedData.reduce((sum, item) => 
        sum + parseFloat(item[header]), 0) / processedData.length).toFixed(2);

    return (
        <div className="chart-box">
            <h3>Marka Popülerlik Karşılaştırması</h3>
            <RadarChart 
                width={500} 
                height={300} 
                data={processedData}
                margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis 
                    angle={30}
                    domain={[0, 'auto']}
                />
                <Radar 
                    name="Popülerlik Puanı"
                    dataKey={header}
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                />
                <Tooltip formatter={(value) => `${value} puan`} />
                <Legend />
            </RadarChart>
            <InfoBox 
                label="Ortalama Popülerlik Puanı"
                value={`${averageScore} puan`}
            />
        </div>
    );
};

export default CustomRadarChart; 