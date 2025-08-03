"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Props = {
  id: string;
  title: string;
};

export function LessonCardWithNotes({ title }: Props) {
  const [notes, setNotes] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
  };

  const handleNextLesson = () => {
    // Simulação de navegação ou ação de próxima lição
    alert("Avançar para a próxima lição...");
  };

  return (
    <div className="border rounded p-4 bg-white dark:bg-gray-800 space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>

      <Textarea
        placeholder="Escreva suas anotações aqui..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="min-h-[120px]"
      />

      <div className="flex flex-col sm:flex-row gap-2 justify-between">
        <Button
          onClick={handleComplete}
          variant={completed ? "secondary" : "default"}
          disabled={completed}
        >
          {completed ? "✅ Concluída" : "Marcar como Concluída"}
        </Button>

        <Button onClick={handleNextLesson} variant="outline">
          Próxima Lição ⏭️
        </Button>
      </div>
    </div>
  );
}
