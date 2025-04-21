"use client";

import { useState } from "react";
import { LessonCardWithNotes } from "@/components/LessonCardWithNotes";
import { Button } from "@/components/ui/button";

const mockLessons = [
  { id: "1", title: "Introdução ao Curso" },
  { id: "2", title: "Direito Constitucional - Aula 1" },
  { id: "3", title: "Direito Penal - Aula 1" },
  { id: "4", title: "Direito Administrativo - Aula 1" },
];

export function LessonNavigator() {
  const [currentLessonId, setCurrentLessonId] = useState<string>(mockLessons[0].id);

  const currentLesson = mockLessons.find((lesson) => lesson.id === currentLessonId);

  return (
    <div className="flex gap-6">
      <aside className="w-64 space-y-2">
        {mockLessons.map((lesson) => (
          <Button
            key={lesson.id}
            variant={lesson.id === currentLessonId ? "default" : "outline"}
            className="w-full justify-start"
            onClick={() => setCurrentLessonId(lesson.id)}
          >
            {lesson.title}
          </Button>
        ))}
      </aside>

      <div className="flex-1">
        {currentLesson && <LessonCardWithNotes id={currentLesson.id} title={currentLesson.title} />}
      </div>
    </div>
  );
}
