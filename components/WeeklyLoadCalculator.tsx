"use client";

import { useState } from "react";
import ChartPieClient from "./ChartPieClient";
import {
  getSubjectColors,
  computeSubjects,
  generateSequentialCycle,
  buildChartData,
  buildCustomLegend,
} from "./utils/weekly-load-helpers";
import { WeekDay, Subject } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const COLORS = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
  "#C9CBCF",
  "#FF5A5E",
  "#B2FF59",
  "#FFD740",
  "#64B5F6",
  "#BA68C8",
  "#81C784",
  "#FFD54F",
  "#4DD0E1",
  "#A1887F",
  "#90A4AE",
  "#E57373",
  "#9575CD",
  "#4DB6AC",
];

const orderedDays: WeekDay[] = [
  "domingo",
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];

export default function WeeklyLoadCalculator() {
  const [totalScore, setTotalScore] = useState(100);

  const [dailyHours, setDailyHours] = useState<Record<WeekDay, number>>({
    domingo: 4,
    segunda: 4,
    terca: 4,
    quarta: 4,
    quinta: 4,
    sexta: 4,
    sabado: 4,
  });

  const [subjects] = useState<Subject[]>([
    { name: "A", score: 25 },
    { name: "B", score: 15 },
    { name: "C", score: 10 },
    { name: "D", score: 10 },
    { name: "E", score: 10 },
    { name: "F", score: 10 },
    { name: "G", score: 10 },
    { name: "H", score: 5 },
    { name: "I", score: 5 },
  ]);

  const weeklyLoad = Object.values(dailyHours).reduce((sum, h) => sum + h, 0);

  const computed = computeSubjects(subjects, totalScore, weeklyLoad);
  const subjectColors = getSubjectColors(subjects, COLORS);
  const sequentialCycle = generateSequentialCycle(computed, weeklyLoad);
  const chartData = buildChartData(sequentialCycle);
  const customLegend = buildCustomLegend(sequentialCycle, subjectColors);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        CALCULADORA DE <span className="text-black">CARGA HORÁRIA</span>
      </h1>

      <h2 className="text-xl font-semibold mb-4">Distribuição diária de estudo (horas por dia)</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {orderedDays.map((day) => (
          <div key={day}>
            <Label className="capitalize mb-1 block">{day}</Label>
            <Input
              type="number"
              min={0}
              value={dailyHours[day]}
              onChange={(e) =>
                setDailyHours((prev) => ({
                  ...prev,
                  [day]: Number(e.target.value),
                }))
              }
            />
          </div>
        ))}
      </div>

      <p className="mb-6 text-lg font-semibold">
        Carga Horária Total: <span className="text-green-700">{weeklyLoad}h</span>
      </p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <Label className="block mb-1 font-semibold">Pontuação Máxima da Prova</Label>
          <Input
            type="number"
            value={totalScore}
            onChange={(e) => setTotalScore(Number(e.target.value))}
          />
        </div>
      </div>

      <table className="w-full border text-center mb-12">
        <thead className="bg-black text-white">
          <tr>
            <th className="p-2 border">Disciplina</th>
            <th className="p-2 border">Pontuação</th>
            <th className="p-2 border">Peso</th>
            <th className="p-2 border">Carga</th>
            <th className="p-2 border bg-green-100 text-black">META</th>
          </tr>
        </thead>
        <tbody>
          {computed.map((s, idx) => (
            <tr key={idx}>
              <td className="border p-1">{s.name}</td>
              <td className="border p-1 text-red-500">{s.score}</td>
              <td className="border p-1">{s.relativeWeight.replace(".", ",")}</td>
              <td className="border p-1">{s.load.replace(".", ",")}</td>
              <td className="border p-1 font-bold text-green-700">{s.goal}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Ciclo Sequencial (60min/bloco)</h2>
      <div className="flex justify-center">
        <ChartPieClient
          chartData={chartData}
          customLegend={customLegend}
          subjectColors={subjectColors}
        />
      </div>
    </div>
  );
}
