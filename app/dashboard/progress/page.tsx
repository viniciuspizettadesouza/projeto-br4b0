"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const mockLessons = [
  { id: 1, title: "Introdução à Disciplina", duration: "10min", completed: true },
  { id: 2, title: "Conteúdo Principal Parte 1", duration: "18min", completed: false },
  { id: 3, title: "Conteúdo Principal Parte 2", duration: "22min", completed: false },
  { id: 4, title: "Revisão e Exercícios", duration: "15min", completed: false },
];

export default function ProgressoDisciplinaPage() {
  const { disciplina } = useParams();
  const [lessons, setLessons] = useState(mockLessons);

  const toggleCompleted = (id: number) => {
    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === id ? { ...lesson, completed: !lesson.completed } : lesson
      )
    );
  };

  const completedCount = lessons.filter((l) => l.completed).length;
  const progress = (completedCount / lessons.length) * 100;

  return (
    <div className=" space-y-8">
      <h2 className="text-2xl font-bold capitalize">Progresso em {disciplina}</h2>

      <Progress value={progress} />
      <p className="text-sm text-gray-500">
        {completedCount} de {lessons.length} aulas concluídas
      </p>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-md">
            <div>
              <p className="font-medium">{lesson.title}</p>
              <p className="text-sm text-gray-500">Duração: {lesson.duration}</p>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={lesson.completed}
                onCheckedChange={() => toggleCompleted(lesson.id)}
              />
              <Label>Concluída</Label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
