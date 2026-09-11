export default function Card() {
  return (
    <>
      <section className="bg-bg-silver h-auto">
        <div className="max-w-5xl mx-auto py-16 px-6">
          <div className="flex gap-10">
            <div className="shadow-md rounded-xl py-10 px-10 flex flex-col">
              <h3 className="text-xl items-center text-center">
                Compre na Amazon
              </h3>
              <p className="mt-4 text-4xl font-bold text-font-hero text-center">
                R$ 59,80
              </p>
              <ul className="mt-8 space-y-4">
                <li>Acesso imediato ao eBook</li>
                <li>Conteúdo atualizado para as eleições de 2026</li>
                <li>Consulta prática durante a campanha</li>
                <li>Material desenvolvido para candidatos e assessores</li>
              </ul>
              <button className="mt-10 bg-hover-button transition-colors ease-in-out duration-300 p-4 rounded-md text-font-primary font-medium hover:bg-font-hero cursor-pointer">
                Compre agora
              </button>
            </div>
            <div className="shadow-md rounded-xl py-10 px-10 flex flex-col">
              <h3 className="text-xl items-center text-center">
                Compre na Hotmart
              </h3>
              <p className="mt-4 text-4xl font-bold text-font-hero text-center">
                R$ 59,80
              </p>
              <ul className="mt-8 space-y-4">
                <li>Acesso imediato ao eBook</li>
                <li>Conteúdo atualizado para as eleições de 2026</li>
                <li>Consulta prática durante a campanha</li>
                <li>Material desenvolvido para candidatos e assessores</li>
              </ul>
              <button className="mt-10 bg-hover-button transition-colors ease-in-out duration-300 p-4 rounded-md text-font-primary font-medium hover:bg-font-hero cursor-pointer">
                Compre agora
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
