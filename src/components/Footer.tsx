export default function Footer() {
  return (
    <>
      <footer
        className="
        relative 
        bg-bg-primary 
        border-t-2 border-transparent [border-image:linear-gradient(to_right,transparent,#d4af37,transparent)_1]
  "
      >
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          {" "}
          <p className="text-sm text-gray-400">
            {" "}
            © 2026 Danúbio Cardoso Remy. Todos os direitos reservados.{" "}
          </p>{" "}
          <p className="mt-4 text-xs text-gray-500 leading-relaxed">
            {" "}
            Este site não faz parte do site do Facebook ou da Meta Inc. Além
            disso, este site <span className="font-semibold">NÃO</span> é
            endossado pelo Facebook de nenhuma maneira.{" "}
          </p>{" "}
          <p className="mt-6 text-xs text-gray-500">
            {" "}
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/oyamasscruz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-font-hero hover:underline"
            >
              {" "}
              Oyama Cruz{" "}
            </a>{" "}
          </p>{" "}
        </div>
      </footer>
    </>
  );
}
