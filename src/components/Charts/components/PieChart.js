import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import InfoBox from './InfoBox';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', 
                '#ffc658', '#ff7300', '#6b486b', '#98abc5'];

const CustomPieChart = ({ data, header }) => {
    // Veriyi marka bazında grupla ve topla
    const processedData = Object.values(data.reduce((acc, item) => {
        const value = parseFloat(item[header]) || 0; // Sayısal değeri güvenli bir şekilde al
        if (!acc[item.name]) {
            acc[item.name] = {
                name: item.name,
                value: 0
            };
        }
        acc[item.name].value += value;
        return acc;
    }, {}));

    // Toplam değeri hesapla
    const total = processedData.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="chart-box">
            <h3>Satış Adedi Dağılımı</h3>
            <PieChart 
                width={500}
                height={300}
                margin={{ top: 5, right: 20, left: 15, bottom: 20 }}
            >
                <Pie
                    data={processedData}
                    cx="70%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => 
                        `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                >
                    {processedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} adet`} />
                <Legend 
                    layout="vertical" 
                    align="right" 
                    verticalAlign="middle"
                    wrapperStyle={{
                        paddingLeft: "50px",
                        right: -10
                    }}
                />
            </PieChart>
            <InfoBox 
                label="Toplam Satış Adedi" 
                value={`${total} adet`} 
            />
        </div>
    );
};

export default CustomPieChart;