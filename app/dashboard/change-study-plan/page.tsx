"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const availablePlans = [
  "PCSC - Escrivão [Plano de Mentoria]",
  "TJSC - Técnico Judiciário [Essencial]",
  "PRF - Agente [Completo]",
];

export default function ChangeStudyPlanPage() {
  const currentPlan = "PCSC - Escrivão [Plano de Mentoria]";
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = () => {
    if (!selectedPlan || selectedPlan === currentPlan) {
      setStatus("error");
      return;
    }

    // Simula sucesso
    setStatus("success");
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Trocar de Plano</h1>

      <div>
        <Label>Plano Atual</Label>
        <div className="mt-1 px-4 py-2 bg-muted rounded">{currentPlan}</div>
      </div>

      <div>
        <Label>Novo Plano</Label>
        <Select onValueChange={setSelectedPlan}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione um novo plano" />
          </SelectTrigger>
          <SelectContent>
            {availablePlans.map((plan) => (
              <SelectItem key={plan} value={plan}>
                {plan}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full" onClick={handleSubmit}>
        Confirmar Troca
      </Button>

      {status === "success" && (
        <Alert>
          <AlertTitle>Plano atualizado!</AlertTitle>
          <AlertDescription>Seu plano foi alterado com sucesso.</AlertDescription>
        </Alert>
      )}

      {status === "error" && (
        <Alert variant="destructive">
          <AlertTitle>Erro ao trocar de plano</AlertTitle>
          <AlertDescription>Escolha um plano diferente do atual.</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
