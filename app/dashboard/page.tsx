"use client";

import dynamic from "next/dynamic";
import { useDashboardContext } from "@/context/dashboard-context";
import { SubjectProgressPanel } from "@/components/SubjectProgressPanel";
import { DisciplinesOverview } from "@/components/DisciplinesOverview";
import { LessonCardWithNotes } from "@/components/LessonCardWithNotes";
import { LessonNavigator } from "@/components/LessonNavigator";
import { Separator } from "@/components/ui/separator";

const WeeklyLoadCalculator = dynamic(() => import("@/components/WeeklyLoadCalculator"), {
  ssr: false,
});

export default function DashboardPage() {
  const { firstName } = useDashboardContext();

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl font-bold mb-2">Olá, {firstName} 👋</h1>
        <SubjectProgressPanel />
      </section>

      <Separator />

      <section>
        <h2 className="text-xl font-semibold mb-4">Disciplinas</h2>
        <DisciplinesOverview />
      </section>

      <Separator />

      <section>
        <h2 className="text-xl font-semibold mb-4">Suas Aulas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <LessonCardWithNotes id="aula-1" title="Aula 1 - Introdução" />
          <LessonCardWithNotes id="aula-2" title="Aula 2 - Direito Penal" />
        </div>
        <div className="mt-6">
          <LessonNavigator />
        </div>
      </section>

      <Separator />

      <section>
        <h2 className="text-xl font-semibold mb-4">Carga Horária</h2>
        <WeeklyLoadCalculator />
      </section>
    </div>
  );
}
