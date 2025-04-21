import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-12">
      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">A plataforma completa para sua preparação</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Estude com foco, acompanhe seu progresso e alcance a aprovação.
        </p>
        <Link href="/sign-in">
          <Button className="text-lg px-6 py-3">Comece agora</Button>
        </Link>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {[
          ["📚", "Acesso a disciplinas organizadas"],
          ["📈", "Painel de progresso personalizado"],
          ["🧠", "Anotações integradas por aula"],
          ["🗓️", "Planejamento de carga horária semanal"],
          ["📥", "Download de cronogramas"],
          ["💬", "Suporte ao aluno"],
        ].map(([emoji, title]) => (
          <div key={title} className="border rounded p-4 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-lg font-semibold mb-1">
              {emoji} {title}
            </h3>
          </div>
        ))}
      </section>

      <section className="text-center max-w-2xl mx-auto mb-20">
        <blockquote className="italic text-lg">
          “A organização da plataforma me ajudou a manter o foco nos estudos. Super recomendo!”
        </blockquote>
        <p className="mt-4 text-sm text-gray-500">Henrique Lopes, aluno</p>
      </section>

      <footer className="border-t pt-6 text-sm text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Projeto br4b0. Todos os direitos reservados.</p>
        <div className="mt-2 space-x-4">
          <Link href="#">Termos de uso</Link>
          <Link href="#">Privacidade</Link>
          <Link href="#">Contato</Link>
        </div>
      </footer>
    </main>
  );
}
