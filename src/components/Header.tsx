export default function Header() {
  return (
    <>
      <header
        className="
        fixed top-0 left-0 w-full 
        bg-bg-primary 
        border-b-2 border-transparent [border-image:linear-gradient(to_right,transparent,#d4af37,transparent)_1]
  "
      >
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center gap-8">
            <div>
              <h1 className="text-font-primary">
                MANUAL PRÁTICO PARA AS{" "}
                <span className="text-font-hero font-bold">ELEIÇÕES 2026</span>
              </h1>
              <p className="text-text-sug text-sm mt-1">Danúbio Cardoso Remy</p>
            </div>
            <button className="bg-hover-button transition-colors ease-in-out duration-300 p-4 rounded-md text-text-btn font-medium hover:bg-font-hero cursor-pointer">
              Garantir meu exemplar
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
