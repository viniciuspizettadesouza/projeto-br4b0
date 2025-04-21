"use client";

import { Progress } from "@/components/ui/progress";

const subjects = [
  { name: "Português", progress: 60 },
  { name: "Informática", progress: 30 },
  { name: "Direito Penal", progress: 90 },
  { name: "Legislação", progress: 45 },
];

export function SubjectProgressPanel() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Progresso por Matéria</h2>
      <div className="space-y-4">
        {subjects.map((subject) => (
          <div key={subject.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-sm">{subject.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{subject.progress}%</span>
            </div>
            <Progress value={subject.progress} />
          </div>
        ))}
      </div>
    </div>
  );
}
