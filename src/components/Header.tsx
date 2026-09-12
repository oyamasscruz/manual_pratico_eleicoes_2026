export default function Header() {
  return (
    <>
      <header
        className="
        sticky top-0 left-0 w-full z-50 
        bg-bg-primary 
        border-b-2 border-transparent [border-image:linear-gradient(to_right,transparent,#d4af37,transparent)_1]
  "
      >
        <div className="max-w-5xl mx-auto px-4 py-4 md:px-6 md:py-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between ">
            <div className="text-center md:text-left">
              <h1 className="text-font-primary text-sm md:text-base">
                MANUAL PRÁTICO PARA AS{" "}
                <span className="text-font-hero font-bold">ELEIÇÕES 2026</span>
              </h1>
              <p className="text-text-sug text-sm mt-1 md:text-sm">
                Danúbio Cardoso Remy
              </p>
            </div>
            <div>
              <button className="bg-hover-button w-full md:w-auto transition-colors ease-in-out duration-300 px-8 py-3 rounded-md text-text-btn font-medium hover:bg-font-hero cursor-pointer md:items-center">
                Garantir meu exemplar
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
