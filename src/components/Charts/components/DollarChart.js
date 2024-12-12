import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import InfoBox from './InfoBox';

const DollarChart = ({ data, header, averages }) => (
    <div className="chart-box" style={{ position: 'relative' }}>
        <h3>{header} Dağılımı</h3>
        <AreaChart
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
                label={{ value: header, angle: -90, position: 'insideLeft', offset: 10 }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Area type="monotone" dataKey={header} fill="#ffc658" stroke="#ffc658" />
        </AreaChart>
        <InfoBox 
            label={`Ortalama ${header}`} 
            value={`$${averages[header]}`} 
        />
    </div>
);

export default DollarChart;