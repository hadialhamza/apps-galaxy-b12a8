import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const BarCharts = ({ ratings }) => {
  const data = [...ratings].reverse();

  return (
    <div
      style={{
        width: "100%",
        height: 300,
        background: "#fafafa",
        padding: "20px",
      }}
    >
      <h3 style={{ marginBottom: "10px", color: "#0a2540", fontWeight: "700" }}>
        Ratings
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, bottom: 10 }}
          className="lg:ml-20"
        >
          <CartesianGrid strokeDasharray="0 0" horizontal={false} />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" tickLine={false} />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
          <Bar
            dataKey="count"
            fill="#ff8c00"
            barSize={20}
            radius={[4, 4, 4, 4]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
