import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import InfoBox from "./InfoBox";

const CustomLineChart = ({ data, header, averages }) => (
  <div className="chart-box">
    <h3>{header} Dağılımı</h3>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, left: 15, bottom: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="name"
        label={{ value: "Marka", position: "insideBottom", offset: -15 }}
      />
      <YAxis
        label={{
          value: header,
          angle: -90,
          position: "insideLeft",
          offset: 10,
        }}
      />
      <Tooltip
        cursor={{ stroke: "#ccc", strokeWidth: 1 }}
        isAnimationActive={false}
        position={{ y: 0 }}
      />
      <Legend verticalAlign="top" height={36} />
      <Line
        type="monotone"
        dataKey={header}
        stroke="#8884d8"
        dot={{ strokeWidth: 2 }}
        activeDot={{ r: 6, strokeWidth: 1 }}
      />
    </LineChart>
    <InfoBox label={`Ortalama ${header}`} value={averages[header]} />
  </div>
);

export default CustomLineChart;
