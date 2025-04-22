"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";

const dailyData = [
  { day: "Seg", voce: 12, media: 8 },
  { day: "Ter", voce: 9, media: 10 },
  { day: "Qua", voce: 7, media: 9 },
  { day: "Qui", voce: 14, media: 11 },
  { day: "Sex", voce: 10, media: 10 },
  { day: "Sab", voce: 5, media: 7 },
  { day: "Dom", voce: 6, media: 6 },
];

const weeklyGoals = [
  { semana: "Semana 1", voce: 8, media: 7 },
  { semana: "Semana 2", voce: 9, media: 6 },
  { semana: "Semana 3", voce: 6, media: 7 },
  { semana: "Semana 4", voce: 10, media: 8 },
];

export default function PerformancePage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      <h1 className="text-2xl font-bold mb-6">Métricas de Desempenho</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">Questões por Dia</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="voce" fill="#4ade80" name="Você" />
            <Bar dataKey="media" fill="#60a5fa" name="Média Geral" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Metas por Semana</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyGoals}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semana" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="voce" stroke="#4ade80" name="Você" />
            <Line type="monotone" dataKey="media" stroke="#60a5fa" name="Média Geral" />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
