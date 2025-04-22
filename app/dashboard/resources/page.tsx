"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const mockData = {
  iniciante: [
    { title: "Resumo Direito Penal", url: "#" },
    { title: "Legislação Específica", url: "#" },
  ],
  avancado: [
    { title: "Apostila Avançada", url: "#" },
    { title: "Simulados Inéditos", url: "#" },
  ],
  mentoria: [
    { title: "Material de Apoio - Mentoria", url: "#" },
    { title: "Roteiro de Estudos", url: "#" },
  ],
};

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Materiais por Plano</h1>

      <Tabs defaultValue="iniciante" className="w-full">
        <TabsList>
          <TabsTrigger value="iniciante">Iniciante</TabsTrigger>
          <TabsTrigger value="avancado">Avançado</TabsTrigger>
          <TabsTrigger value="mentoria">Mentoria</TabsTrigger>
        </TabsList>

        {Object.entries(mockData).map(([key, files]) => (
          <TabsContent key={key} value={key}>
            <ul className="space-y-4 mt-4">
              {files.map((file, idx) => (
                <li key={idx} className="flex items-center justify-between p-3 border rounded">
                  <span>{file.title}</span>
                  <Button variant="secondary">📥 Baixar</Button>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
