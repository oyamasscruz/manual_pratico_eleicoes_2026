import DanubioImg from "../assets/danubio-cadeira.jpg";

export default function Bio() {
  return (
    <>
      <section className="bg-bg-primary h-auto">
        <div
          className="max-w-5xl mx-auto
          px-6 py-16
          flex flex-col
          md:flex-row
          items-center
          md:items-center
          gap-10"
        >
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl text-font-primary font-bold md:text-center">
              Quem é o{" "}
              <span className="text-font-hero font-bold">
                Danubio Cardoso Remy
              </span>
            </h3>
            <p className="text-font-primary mt-20 text-justify">
              Danúbio Cardoso Remy Romano Frauzino é advogado eleitoralista,
              mestre em Ciência do Direito pela Universidade de Lisboa e
              doutorando em Direito Constitucional pela Universidade de Buenos
              Aires (UBA). É especialista em Direito Público pela UFG e em
              Direito Eleitoral pelo IDP/Brasília, PUC Goiás e Universidade
              Cândido Mendes, professor de Direito Eleitoral na Escola Superior
              da Advocacia e na Escola do Legislativo, e ex-conselheiro da
              OAB/GO. Atua no contencioso eleitoral há mais de 16 anos — o
              conteúdo deste manual nasce da prática, não só da teoria.
            </p>
          </div>
          <div className="mt-5">
            <img
              className="w-full max-w-xs rounded-md md:max-w-sm shrink-0"
              src={DanubioImg}
              alt="Foto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
