"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const mockVideos = [
  { title: "Introdução ao Curso", duration: "10min", watched: true },
  { title: "Direito Penal - Aula 1", duration: "45min", watched: false },
  { title: "Direito Penal - Aula 2", duration: "38min", watched: false },
  { title: "Simulado Comentado", duration: "25min", watched: true },
];

export default function VideosPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Trilha de Vídeos</h1>

      <div className="space-y-4">
        {mockVideos.map((video, idx) => (
          <Card key={idx} className="flex items-center justify-between px-4 py-3">
            <CardContent className="p-0 w-full">
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="font-semibold">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.duration}</p>
                </div>
                <div className="flex items-center gap-3">
                  {video.watched && (
                    <span className="text-green-600 text-sm font-medium">✅ Assistido</span>
                  )}
                  <Button variant="outline">▶️ Assistir</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
