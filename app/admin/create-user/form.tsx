"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function CreateUserForm() {
  const [, setPlan] = useState("");
  const [, setMonths] = useState("12");
  const [emails, setEmails] = useState("");
  const [skipEmail, setSkipEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: lógica de envio aqui
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-gray-950 rounded-lg p-6 shadow max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span>✉️</span> Cadastrar novo Aluno
      </h2>

      <p className="text-sm text-muted-foreground leading-relaxed">
        O cadastro permite que o aluno se matricule em um curso da sua conta, por período
        determinado. Os convites de cadastros são válidos apenas para o endereço de e-mail informado
        e só podem ser usados uma única vez.
        <br />
        Para enviar um convite de cadastro, basta selecionar um curso e digitar algum endereço de
        e-mail.
        <br />
        <strong>Não é possível usar essa função para alunos já cadastrados em sua conta.</strong>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Plano de Estudo:</Label>
          <Select onValueChange={setPlan}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um plano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pcsc-mentoria">🔥 PCSC - Escrivão [Plano de mentoria]</SelectItem>
              <SelectItem value="pcsc-avancado">🔥 PCSC - Escrivão [Plano avançado]</SelectItem>
              <SelectItem value="pcsc-iniciante">🔥 PCSC - Escrivão [Plano iniciante]</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Meses de acesso:</Label>
          <Select onValueChange={setMonths} defaultValue="12">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[...Array(24)].map((_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>
          E-mail para cadastro
          <span className="text-xs text-muted-foreground ml-1">
            (digite os emails para convite, separados por vírgula):
          </span>
        </Label>
        <Input
          type="text"
          placeholder="email@aluno.com.br"
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="skipEmail"
          checked={skipEmail}
          onCheckedChange={() => setSkipEmail(!skipEmail)}
        />
        <label
          htmlFor="skipEmail"
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Não enviar e-mail, pois eu vou criar a conta do aluno
        </label>
      </div>

      <Button type="submit" className="w-full font-bold">
        Enviar Cadastro!
      </Button>
    </form>
  );
}
