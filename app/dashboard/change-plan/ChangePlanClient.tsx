"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { useDashboardContext } from "@/context/dashboard-context";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


export default function ChangePlanForm() {
    const [form, setForm] = useState({
        name: "Henrique",
        gender: "masculino",
        birth: "1996-12-22",
        category: "nenhuma",
        ddd: "51",
        phone: "9936-80974",
        startDate: "2025-03-01",
        duration: "3",
        notes: "",
    });

      const { image } = useDashboardContext();
    

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="space-y-6">
            <div className="p-4 border rounded bg-gray-50 dark:bg-gray-800 mb-6">
                <h2 className="text-xl font-bold mb-2">Editar Cadastro</h2>
                <div className="flex justify-between items-start gap-4">
                    <div className="flex gap-4">
                        <Image
                            src={image ?? "/placeholder-avatar.png"}
                            alt="Avatar do aluno"
                            width={80}
                            height={80}
                            className="h-20 w-20 rounded-full object-cover border"
                        />

                        <div>
                            <p className="font-semibold text-lg">Henrique</p>
                            <p className="text-sm text-gray-600">
                                📘 Curso Atual: <strong>PCRS - Escrivão e Inspetor [Básico]</strong>
                            </p>
                            <p className="text-sm text-gray-600">
                                📧 E-mail: <strong>hlopes224@gmail.com</strong>
                            </p>
                            <p className="text-sm text-gray-600">
                                🔢 Matrícula: <strong>038.061.900-89</strong>
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="destructive">Desativar este aluno</Button>
                        <Button variant="default">Resetar Senha</Button>
                    </div>
                </div>
            </div>

            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label>Nome</Label>
                        <Input value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
                    </div>



                    <div className="relative z-0">

                        <Label>Gênero</Label>
                        <Select value={form.gender} onValueChange={(v) => handleChange("gender", v)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecione o gênero" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="masculino">Masculino</SelectItem>
                                <SelectItem value="feminino">Feminino</SelectItem>
                                <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Nascimento</Label>
                        <Input type="date" value={form.birth} onChange={(e) => handleChange("birth", e.target.value)} />
                    </div>
                    <div>
                        <Label>Categoria</Label>
                        <Select value={form.category} onValueChange={(v) => handleChange("category", v)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecione a categoria" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="nenhuma">Nenhuma</SelectItem>
                                <SelectItem value="pcd">PCD</SelectItem>
                                <SelectItem value="cotista">Cotista</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>DDD</Label>
                        <Input value={form.ddd} onChange={(e) => handleChange("ddd", e.target.value)} />
                    </div>
                    <div>
                        <Label>Telefone</Label>
                        <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} />
                        <a
                            href={`https://wa.me/55${form.ddd}${form.phone}`}
                            target="_blank"
                            className="text-sm text-blue-500 underline"
                        >
                            verificar Whatsapp
                        </a>
                    </div>
                    <div>
                        <Label>Data de Início</Label>
                        <Input type="date" value={form.startDate} onChange={(e) => handleChange("startDate", e.target.value)} />
                    </div>
                    <div>
                        <Label>Duração (meses)</Label>
                        <Input type="number" value={form.duration} onChange={(e) => handleChange("duration", e.target.value)} />
                    </div>
                </div>

                <div>
                    <Label>Ficha do Aluno</Label>
                    <Textarea
                        placeholder="Digite informações relevantes sobre o aluno..."
                        value={form.notes}
                        onChange={(e) => handleChange("notes", e.target.value)}
                    />
                </div>

                <Button type="submit">Alterar Cadastro</Button>

                <div className="mt-4 flex gap-2">
                    <Button className="bg-green-500 hover:bg-green-600 text-white">
                        Clique para trocar o plano deste aluno
                    </Button>
                    <Button variant="secondary">
                        📥 baixar cronograma
                    </Button>
                </div>
            </form>
        </div>
    );
}
