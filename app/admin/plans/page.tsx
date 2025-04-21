"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockPlans = [
  {
    id: "basic",
    name: "Iniciante",
    price: "R$ 150,00",
    duration: "3 meses",
    description: "Acesso básico às disciplinas principais.",
  },
  {
    id: "advanced",
    name: "Avançado",
    price: "R$ 250,00",
    duration: "6 meses",
    description: "Inclui materiais extras e simulados.",
  },
  {
    id: "mentoria",
    name: "Mentoria",
    price: "R$ 500,00",
    duration: "12 meses",
    description: "Mentoria exclusiva com encontros ao vivo.",
  },
];

export default function AdminPlansPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Planos Disponíveis</h1>

      <div className="overflow-x-auto rounded border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Duração</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockPlans.map((plan) => (
              <TableRow key={plan.id}>
                <TableCell>{plan.name}</TableCell>
                <TableCell>{plan.duration}</TableCell>
                <TableCell>{plan.price}</TableCell>
                <TableCell>{plan.description}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="sm" variant="outline">
                    Editar
                  </Button>
                  <Button size="sm" variant="destructive">
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
