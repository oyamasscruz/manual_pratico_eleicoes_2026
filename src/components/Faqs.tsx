import { useState } from "react";

const faqs = [
  {
    question: "O manual é fisico ou digital?",
    answer:
      "A versão vendida aqui é 100% digital (PDF), com entrega imediata após a confirmação do pagamento. Se preferir a versão impressa ou o eBook Kindle, ela está disponível separadamente na Amazon.",
  },
  {
    question:
      "Serve para qualquer cargo — vereador, prefeito, deputado, senador?",
    answer:
      "Sim. O conteúdo cobre a legislação eleitoral aplicável a todos os cargos majoritários e proporcionais nas Eleições 2026, incluindo as particularidades de convenção, registro e prestação de contas de cada nível.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer:
      "Cartão de crédito (em até 12x, conforme a operadora), Pix e boleto bancário, processados diretamente pela Hotmart.",
  },
  {
    question: "Em quanto tempo recebo o material?",
    answer:
      "Imediatamente após a confirmação do pagamento (instantânea no cartão e Pix), por e-mail e na sua área de membros Hotmart.",
  },
];

export default function Faqs() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <section className="bg-bg-primary h-auto">
        <div className="max-w-5xl mx-auto py-10 px-6">
          <h3 className="text-3xl text-bg-silver font-bold mt-5">
            Perguntas frequentes
          </h3>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-font-hero py-4">
                <button
                  className="cursor-pointer"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="font-bold text-md text-bg-silver mt-2">
                    {faq.question}
                  </span>
                </button>
                {open === index && (
                  <p className="text-bg-silver font-extralight">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
