import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import InfoBox from './InfoBox';

const DeliveryChart = ({ data, header, averages }) => (
    <div className="chart-box" style={{ position: 'relative' }}>
        <h3>Tahmini Teslim Süresi Dağılımı</h3>
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
                label={{ value: 'Teslim Süresi (gün)', angle: -90, position: 'insideLeft', offset: 10 }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Area type="monotone" dataKey={header} fill="#00b894" stroke="#00b894" />
        </AreaChart>
        <InfoBox 
            label={`Ortalama ${header}`} 
            value={`${averages[header]} gün`} 
        />
    </div>
);

export default DeliveryChart; 