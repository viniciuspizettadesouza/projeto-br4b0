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

const mockStudents = [
  {
    id: "1",
    name: "Henrique Lopes",
    email: "hlopes224@gmail.com",
    plan: "Iniciante",
    enrollment: "038.061.900-89",
  },
  {
    id: "2",
    name: "Zetta2k",
    email: "Zetta2k@email.com",
    plan: "Agressivo",
    enrollment: "000.000.000-00",
  },
];

export default function StudentsListPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Lista de Alunos</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Plano</TableHead>
            <TableHead>Matrícula</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockStudents.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.plan}</TableCell>
              <TableCell>{student.enrollment}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm">
                  Editar
                </Button>
                <Button variant="outline" size="sm">
                  Alterar Plano
                </Button>
                <Button variant="destructive" size="sm">
                  Desativar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
