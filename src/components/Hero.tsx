import CapaLivro from "../assets/capa-livro-manual-pratico.png";

export default function Hero() {
  return (
    <>
      <section className="bg-bg-primary h-auto ">
        <div className="max-w-5xl mx-auto py-10 px-6 flex justify-between ">
          <div className="mt-40">
            <h3 className="text-font-hero font-bold text-4xl mb-4">
              As regras mudaram. A sua campanha está blindada para 2026?
            </h3>
            <div className="space-y-6 text-font-primary">
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
            <button className="mt-4 bg-hover-button transition-colors ease-in-out duration-300 p-4 rounded-md text-text-btn font-medium hover:bg-font-hero cursor-pointer">
              Quero garantir o meu ebook agora
            </button>
          </div>
          <div>
            <img className="max-w-sm mt-40" src={CapaLivro} />
          </div>
        </div>
        <div className="bg-red-900">
          <div className="max-w-5xl mx-auto py-3 px-6 text-gray-400">
            <p>
              Prestação de contas rejeitada. Propaganda irregular. Registro
              impugnado. — riscos reais que este manual ajuda a evitar antes que
              aconteçam.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
