"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function StudentDashboardPanel() {
  // MOCK: substitua depois por dados reais do backend
  const student = {
    fullName: "Henrique Lopes",
    course: "PCRS - Escrivão e Inspetor [Básico]",
    registration: "038.061.900-89",
    plan: "Mentoria",
    startDate: "2025-03-01",
    duration: 6,
  };

  return (
    <Card className="p-6 mb-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-xl font-semibold mb-2">Informações do Aluno</h2>

      <div className="space-y-1">
        <p className="text-sm">
          <span className="font-medium">Nome:</span> {student.fullName}
        </p>
        <p className="text-sm">
          <span className="font-medium">Curso Atual:</span> {student.course}
        </p>
        <p className="text-sm">
          <span className="font-medium">Matrícula:</span> {student.registration}
        </p>
        <p className="text-sm">
          <span className="font-medium">Plano:</span>{" "}
          <Badge variant="default">{student.plan}</Badge>
        </p>
        <p className="text-sm">
          <span className="font-medium">Início:</span> {student.startDate}
        </p>
        <p className="text-sm">
          <span className="font-medium">Duração:</span> {student.duration} meses
        </p>
      </div>
    </Card>
  );
}
