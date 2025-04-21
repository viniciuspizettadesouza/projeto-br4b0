"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total de Alunos",
    value: 22,
  },
  {
    title: "Alunos Ativos",
    value: 17,
  },
  {
    title: "Faturamento Mensal (estimado)",
    value: "R$ 22.17",
  },
  {
    title: "Novos Cadastros no Mês",
    value: 13,
  },
];

export default function AdminStatsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Estatísticas da Plataforma</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader>
              <CardTitle className="text-sm text-gray-500">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
