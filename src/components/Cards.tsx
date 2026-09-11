export default function Card() {
  return (
    <>
      <section className="bg-bg-silver h-auto py-20">
        <div className="max-w-5xl mx-auto py-16 px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-font-hero">
              Adquira o Manual Prático das Eleições 2026
            </h2>

            <p className="mt-4 text-base text-font-secondary">
              Tenha em mãos um material de consulta prática para orientar suas
              decisões durante a campanha.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="shadow-md rounded-xl py-10 px-10 flex flex-col w-full max-w-xl">
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
              <button className="mt-10 bg-hover-button transition-colors ease-in-out duration-300 p-4 rounded-md text-text-btn font-medium hover:bg-font-hero cursor-pointer">
                Compre agora
              </button>
              <p
                className="text-center mt-6 text-sm"
                style={{ color: "#4B5850" }}
              >
                Prefere ler no Kindle?{" "}
                <a
                  href="https://www.amazon.com.br/dp/B0H8VT7CCW"
                  target="_blank"
                  className="underline"
                  style={{ color: "#173C2E" }}
                >
                  Compre na Amazon
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
