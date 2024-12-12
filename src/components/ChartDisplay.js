import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartDisplay = ({ data, xAxisName, yAxisName }) => {
    return (
        <div>
            <LineChart
                width={800}
                height={400}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="name" 
                    label={{ value: xAxisName, position: 'bottom' }}
                />
                <YAxis
                    label={{ value: yAxisName, angle: -90, position: 'left' }}
                />
                <Tooltip />
                <Legend />
                <Line 
                    type="monotone" 
                    dataKey="value" 
                    name={yAxisName}
                    stroke="#8884d8" 
                    activeDot={{ r: 8 }} 
                />
            </LineChart>
        </div>
    );
};

export default ChartDisplay;
