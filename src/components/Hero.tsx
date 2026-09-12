import CapaLivro from "../assets/capa-livro-manual-pratico.png";

export default function Hero() {
  return (
    <>
      <section className="bg-bg-primary h-auto ">
        <div
          className="max-w-5xl mx-auto
          px-6 py-12
          flex flex-col
          gap-10
          md:min-h-[calc(100vh-200px)]
          md:flex-row
          md:items-center
          md:justify-between"
        >
          <div className="md:flex-row md:text-center">
            <h3 className="text-font-hero font-bold text-4xl mb-4">
              As regras mudaram. A sua campanha está blindada para 2026?
            </h3>
            <div className="space-y-6 text-font-primary text-justify">
              <p>
                O processo eleitoral mudou. Com as novas resoluções do TSE, um
                erro na prestação de contas, condutas vedadas ou uso de
                Inteligência Artificial pode custar a cassação da sua chapa
                inteira.
              </p>
              <p className="font-bold text-xl">
                Vencer nas urnas não é mais suficiente. Sobreviva à Justiça
                Eleitoral.
              </p>
            </div>
            <a
              href="https://hotmart.com/pt-br/marketplace/produtos/manual-pratico-para-as-eleicoes-2026/D105870888W "
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block text-center bg-hover-button transition-colors ease-in-out duration-300 p-4 rounded-md text-text-btn font-medium hover:bg-font-hero cursor-pointer md:items-center w-full md:w-auto"
            >
              Quero garantir o meu ebook agora
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full
              max-w-sm
              md:max-w-md
              lg:max-w-lg
              object-contain"
              src={CapaLivro}
            />
          </div>
        </div>
        <div className="bg-red-900">
          <div className="max-w-5xl mx-auto py-3 px-6 text-gray-400">
            <p>
              Prestação de contas rejeitada. Propaganda irregular. Registro
              impugnado. Riscos reais que este manual ajuda a evitar antes que
              aconteçam.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
