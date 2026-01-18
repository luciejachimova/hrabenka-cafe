export default function Contact() {
  return (
    <section className="bg-[#f7e9d6] py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-[#6e4e37] mb-2 tracking-wide uppercase">Kontakt</h2>
          <div className="w-12 h-px bg-[#b89b6d] mx-auto"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-4 text-center text-[#6e4e37]">

          <div className="space-y-4">
            <h3 className="text-lg font-medium uppercase tracking-wide text-[#b89b6d]">
              Adresa
            </h3>

            <div className="space-y-2 text-[#6e4e37]/80">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rabí+175+342+01+Rabí"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b89b6d] transition-colors duration-300 inline-block"
              >
                <p>Rabí 175</p>
                <p>342 01 Rabí</p>
                <p>Česká republika</p>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium uppercase tracking-wide text-[#b89b6d]">Kontakt</h3>
            <div className="space-y-2 text-[#6e4e37]/80">
              <p>
                <a
                  href="tel:+420770421947"
                  className="hover:text-[#b89b6d] transition-colors duration-300"
                >
                  +420 770 421 947
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@hrabenka.cz"
                  className="hover:text-[#b89b6d] transition-colors duration-300"
                >
                  info@hrabenka.cz
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium uppercase tracking-wide text-[#b89b6d]">Otevírací doba</h3>
            <div className="space-y-2 text-[#6e4e37]/80">
              <p>Po - Ne: 10:00 - 18:00</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium uppercase tracking-wide text-[#b89b6d]">Sledujte nás</h3>
            <div className="space-y-2 text-[#6e4e37]/80">
              <p>
                <a
                  href="https://www.facebook.com/pavla.myslikova.9"
                  className="hover:text-[#b89b6d] transition-colors duration-300"
                >
                  Facebook
                </a>
              </p>
              <p>
                <a
                  href="https://instagram.com/hrabenka"
                  className="hover:text-[#b89b6d] transition-colors duration-300"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="text-center mt-16 pt-12 border-t border-[#6e4e37]/20">
          <div className="mb-4">
            <h3 className="text-2xl font-light text-[#6e4e37] tracking-[0.1em] uppercase">Hraběnka</h3>
            <p className="text-[#6e4e37]/70 italic text-sm mt-1">Kavárna & Cukrárna</p>
          </div>
          <p className="text-[#6e4e37]/60 text-sm">
            Těšíme se na vaši návštěvu v našem útulném prostředí
          </p>
        </div>

      </div>
    </section>
  );
}