import { useState } from "react";

const faqs = [
  {
    question: "Prazos e desincompatibilização",
    answer:
      "A tabela exata de prazos fatais e os requisitos de desincompatibilização para não perder o registro por um detalhe de calendário.",
  },
  {
    question: "Inteligência artificial e desinformação",
    answer:
      "As novas regras sobre deepfakes, conteúdo sintético e o que pode ou não ser publicado nas redes durante a campanha de 2026.",
  },
  {
    question: "Prestação de contas",
    answer:
      "Como evitar a rejeição de contas, multas e a devolução de recursos do Fundo Eleitoral por erro formal evitável.",
  },
  {
    question: "Condutas vedadas",
    answer:
      "O que pode ou não ser dito em eventos, carreatas e na internet nos meses que antecedem a eleição.",
  },
  {
    question: "Sobras e distribuição de vagas",
    answer:
      "O cálculo do quociente eleitoral e partidário explicado sem rodeios, para entender exatamente como as vagas são definidas.",
  },
];

export default function Solution() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <section className="bg-bg-silver h-auto">
        <div className="max-w-5xl mx-auto py-10 px-6">
          <h3 className="text-3xl text-bg-primary font-bold mt-5">
            O que este manual resolve
          </h3>
          <p className="mt-4">
            Organizado como um guia de aplicação prática — não um tratado para
            ler do início ao fim, mas uma referência para consultar exatamente
            quando a dúvida aparece.
          </p>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-font-hero py-4">
                <button
                  className="cursor-pointer"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span className="font-bold text-md text-bg-primary mt-2">
                    {faq.question}
                  </span>
                </button>
                {open === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
