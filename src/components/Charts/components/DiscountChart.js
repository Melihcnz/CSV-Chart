import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import InfoBox from './InfoBox';

const DiscountChart = ({ data, header, averages }) => (
    <div className="chart-box" style={{ position: 'relative' }}>
        <h3>İndirim Oranı Dağılımı</h3>
        <LineChart
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
                label={{ value: 'İndirim Oranı (%)', angle: -90, position: 'insideLeft', offset: 10 }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey={header} stroke="#e84393" />
        </LineChart>
        <InfoBox 
            label={`Ortalama ${header}`} 
            value={`%${averages[header]}`} 
        />
    </div>
);

export default DiscountChart; 