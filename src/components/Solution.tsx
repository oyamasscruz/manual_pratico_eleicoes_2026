import { motion } from "framer-motion";

const solutions = [
  {
    title: "Prazos e desincompatibilização",
    description:
      "A tabela exata de prazos fatais e os requisitos de desincompatibilização para não perder o registro por um detalhe de calendário.",
  },
  {
    title: "Inteligência artificial e desinformação",
    description:
      "As novas regras sobre deepfakes, conteúdo sintético e o que pode ou não ser publicado nas redes durante a campanha de 2026.",
  },
  {
    title: "Prestação de contas",
    description:
      "Como evitar a rejeição de contas, multas e a devolução de recursos do Fundo Eleitoral por erro formal evitável.",
  },
  {
    title: "Condutas vedadas",
    description:
      "O que pode ou não ser dito em eventos, carreatas e na internet nos meses que antecedem a eleição.",
  },
  {
    title: "Sobras e distribuição de vagas",
    description:
      "O cálculo do quociente eleitoral e partidário explicado sem rodeios, para entender exatamente como as vagas são definidas.",
  },
];

export default function Solution() {
  return (
    <section className="bg-bg-asks">
      <div className="max-w-5xl mx-auto py-20 px-6">
        {/* Título */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl text-bg-primary font-bold">
            O que este manual resolve
          </h3>

          <p className="mt-4 max-w-3xl leading-relaxed">
            Organizado como um guia de aplicação prática — não um tratado para
            ler do início ao fim, mas uma referência para consultar exatamente
            quando a dúvida aparece.
          </p>
        </div>

        {/* Lista de soluções */}
        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="flex items-start gap-4"
            >
              {/* Ícone */}
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-bg-primary text-font-hero font-bold">
                ✓
              </span>

              {/* Conteúdo */}
              <div>
                <h4 className="text-lg font-bold text-bg-primary">
                  {solution.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-bg-primary/80 max-w-3xl">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
