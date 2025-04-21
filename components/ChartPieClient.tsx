"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

type Props = {
  chartData: {
    name: string;
    value: number;
    subject: string;
  }[];
  customLegend: {
    name: string;
    color: string;
  }[];
  subjectColors: Record<string, string>;
};

export default function ChartPieClient({ chartData, customLegend, subjectColors }: Props) {
  return (
    <PieChart width={500} height={500}>
      <Pie
        data={chartData}
        cx="50%"
        cy="50%"
        innerRadius={90}
        outerRadius={150}
        dataKey="value"
        startAngle={90}
        endAngle={-270}
        paddingAngle={1}
        label={({ name }) => name}
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={subjectColors[entry.subject]} />
        ))}
      </Pie>
      <Tooltip
        formatter={(v, name, props) => {
          const totalMin = v as number;
          const hours = Math.floor(totalMin / 60);
          const minutes = totalMin % 60;
          return [`${hours}h ${minutes}min`, props.payload.name];
        }}
      />
      <Legend
        payload={customLegend.map((item) => ({
          id: item.name,
          type: "square",
          value: item.name,
          color: item.color,
        }))}
      />
    </PieChart>
  );
}
