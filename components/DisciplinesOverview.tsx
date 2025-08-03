"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mockSubjects = [
  {
    id: 1,
    name: "Português",
    completed: 8,
    total: 20,
  },
  {
    id: 2,
    name: "Matemática",
    completed: 12,
    total: 18,
  },
  {
    id: 3,
    name: "Direito Penal",
    completed: 4,
    total: 12,
  },
];

export function DisciplinesOverview() {
  return (
    <section className="mt-12 space-y-6">
      <h2 className="text-xl font-semibold">Todas as Disciplinas</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockSubjects.map((subject) => {
          const progress = Math.round((subject.completed / subject.total) * 100);

          return (
            <Card key={subject.id}>
              <CardContent className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{subject.name}</h3>
                  <span className="text-sm text-gray-500">{progress}%</span>
                </div>
                <Progress value={progress} />
                <p className="text-sm text-gray-500">
                  {subject.completed} de {subject.total} aulas concluídas
                </p>
                <Button asChild variant="secondary" className="w-full mt-2">
                  <Link href={`/dashboard/subject/${subject.id}`}>Ver detalhes</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
