export default function About() {
  return (
    <section id="onas" className="py-24 px-12 sm:px-12  bg-[#fdf6ee]">
      <div className="max-w-6xl mx-auto px-3 sm:px-24">

        <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-[#6e4e37] font-medium mb-4">O nás</h2>
            <div className="w-16 h-px bg-[#b89b6d] mx-auto mb-6"></div>

          <p className="text-[#6e4e37]/70 font-light max-w-3xl mx-auto text-lg">
            Poznejte příběh kavárnyv malebném městečku Rabí, kde se tradice potkává s moderním přístupem k dobrému jídlu a pití
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Levý sloupec */}
          <div className="space-y-8">
            <div className="border-b border-[#6e4e37]/20 pb-6">
              <h3 className="text-xl font-medium text-[#6e4e37] mb-3 tracking-wide uppercase">
                Vítejte v kavárně Hraběnka
              </h3>
              <p className="text-[#6e4e37]/80 leading-relaxed font-light">
                Místě, kde se setkává elegance s poctivou chutí. Užijte si italskou kávu Vergnano,
                poctivé dezerty a klidnou atmosféru.
              </p>
            </div>

            <div className="border-b border-[#6e4e37]/20 pb-6">
              <h3 className="text-xl font-medium text-[#6e4e37] mb-3 tracking-wide uppercase">
                Naše filosofie
              </h3>
              <p className="text-[#6e4e37]/80 leading-relaxed font-light">
                Každý šálek kávy připravujemo s péčí a každý dezert vytváříme
                podle tradičních receptů. Věříme, že kvalita je v detailech.
              </p>
            </div>

            <div className="border-b border-[#6e4e37]/20 pb-6">
              <h3 className="text-xl font-medium text-[#6e4e37] mb-3 tracking-wide uppercase">
                Čerstvé každý den
              </h3>
              <p className="text-[#6e4e37]/80 leading-relaxed font-light">
                Naše dezerty připravujeme každé ráno z čerstvých surovin.
                Káva je pražena v malých dávkách pro zachování aroma.
              </p>
            </div>
          </div>

          {/* Pravý sloupec */}
          <div className="space-y-8">

            <div className="border-b border-[#6e4e37]/20 pb-6">
              <h3 className="text-xl font-medium text-[#6e4e37] mb-3 tracking-wide uppercase">
                Atmosféra
              </h3>
              <p className="text-[#6e4e37]/80 leading-relaxed font-light">
                V našem útulném prostředí najdete klid od ruchu města.
                Ať už přijdete na ranní kávu, slanou pochoutku nebo odpolední dezert,
                vždy vás uvítáme s úsměvem.
              </p>
            </div>

            <div className="border-b border-[#6e4e37]/20 pb-6">
              <h3 className="text-xl font-medium text-[#6e4e37] mb-3 tracking-wide uppercase">
                Kvalita
              </h3>
              <p className="text-[#6e4e37]/80 leading-relaxed font-light">
                Používáme pouze nejkvalitnější suroviny od prověřených dodavatelů.
                Každý den připravujeme s maximální péčí a pozorností.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}