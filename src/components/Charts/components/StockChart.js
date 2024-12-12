import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import InfoBox from './InfoBox';
const StockChart = ({ data, header, averages }) => (
    <div className="chart-box">
        <h3>Stok Sayısı Dağılımı</h3>
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, left: 15, bottom: 20 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                dataKey="name"
                label={{ value: 'Marka', position: 'insideBottom', offset: -15 }}
            />
            <YAxis 
                label={{ value: 'Stok Sayısı', angle: -90, position: 'insideLeft', offset: 10 }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Bar dataKey={header} fill="#ff7675" />
        </BarChart>
        <InfoBox 
            label={`Ortalama ${header}`} 
            value={averages[header]} 
        />
    </div>
);

export default StockChart; 