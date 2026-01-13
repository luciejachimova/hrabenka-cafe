export default function Menu() {
  const coffees = [
    {
      name: "ESPRESSO",
      desc: "Klasické italské espresso z výběrových zrn",
      price: "55"
    },
    {
      name: "CAPPUCCINO",
      desc: "S napěněným mlékem a jemnou mléčnou pěnou",
      price: "65"
    },
    {
      name: "CAFFÈ LATTE",
      desc: "Jemné horké mléko s dvojitým espressem",
      price: "75"
    },
    {
      name: "AMERICANO",
      desc: "Espresso prodloužené horkou vodou",
      price: "60"
    },
    {
      name: "LEDOVÁ KÁVA",
      desc: "Osvěžující káva s ledem a studeným mlékem",
      price: "75"
    },
  ]

  const desserts = [
    {
      name: "CHEESECAKE",
      desc: "Krémový s lesním ovocem a vanilkovou omáčkou",
      price: "65"
    },
    {
      name: "PANNA COTTA",
      desc: "Italský krém s malinami a pistáciemi",
      price: "60"
    },
    {
      name: "PALAČINKY",
      desc: "S čerstvým ovocem a šlehačkou",
      price: "120"
    },
    {
      name: "TIRAMISU",
      desc: "Tradiční italský dezert s mascarpone",
      price: "65"
    },
    {
      name: "HRABENČIN DORT",
      desc: "Tajný rodinný recept našich předků",
      price: "80"
    }
  ]

  const iceCreams = [
    {
      name: "CHOCOLATE FONDENTE",
      desc: "Intenzivní hořká čokoláda 70% kakaa",
      price: "45"
    },
    {
      name: "STRACCIATELLA",
      desc: "Vanilková zmrzlina s kousky temné čokolády",
      price: "45"
    },
    {
      name: "PASSION FRUIT",
      desc: "Tropická marakujová zmrzlina",
      price: "50"
    },
    {
      name: "SALTED CARAMEL",
      desc: "Slaný karamel s vanilkou a mořskou solí",
      price: "48"
    },
    {
      name: "RASPBERRY",
      desc: "Malinová s čerstvými malinami",
      price: "50"
    },
  ]

  const drinks = [
    {
      name: "PROSECCO",
      desc: "Italské šumivé víno",
      price: "120"
    },
    {
      name: "BÍLÉ VÍNO",
      desc: "Sauvignon Blanc, Chardonnay",
      price: "90"
    },
    {
      name: "ČERVENÉ VÍNO",
      desc: "Cabernet, Merlot",
      price: "95"
    },
    {
      name: "DOMÁCÍ LIMONÁDA",
      desc: "Citron, máta, med",
      price: "60"
    },
    {
      name: "HORKÁ ČOKOLÁDA",
      desc: "S šlehačkou a skořicí",
      price: "60"
    },
    {
      name: "BABYCCINO",
      desc: "Našlehané mléko se skořicí nebo kakaem",
      price: "20"
    },
    {
      name: "ČAJ DLE VÝBĚRU",
      desc: "Earl Grey, zelený, bylinný",
      price: "50"
    }
  ]

  return (
    <div className="font-sans bg-[#fdf6ee] text-[#6e4e37] min-h-screen flex flex-col">

      <section className="relative w-full py-10 sm:px-6 text-center">
        <div className="text-center">
            <h2 className="text-4xl font-serif text-[#6e4e37] font-medium mb-4">Naše nabídka</h2>
            <div className="w-16 h-px bg-[#b89b6d] mx-auto mb-6"></div>
          <p className="text-[#6e4e37]/70 font-light max-w-3xl mx-auto text-lg">
            Nabízíme klasické dorty, sezónní dezerty, snídaně, i kvalitní kávu z českých pražíren.
            Na přání připravujeme i svatební nebo narozeninové dorty.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-6xl mx-auto px-6 sm:px-12 py-10">

        <div className="grid gap-16 lg:grid-cols-2">

          <section className="mb-12 lg:mb-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium text-[#6e4e37] mb-3 tracking-wide uppercase">Káva</h2>
              <div className="w-12 h-px bg-[#b89b6d] mx-auto"></div>
            </div>

            <div className="space-y-6">
              {coffees.map((coffee) => (
                <div key={coffee.name} className="border-b border-[#b89b6d]/20 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-[#6e4e37] tracking-wide uppercase">
                      {coffee.name}
                    </h3>
                    <span className="text-lg font-semibold text-[#b89b6d] ml-4">
                      {coffee.price} Kč
                    </span>
                  </div>
                  <p className="text-sm text-[#6e4e37]/80 italic leading-relaxed">
                    {coffee.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 lg:mb-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium text-[#6e4e37] mb-3 tracking-wide uppercase">Dezerty</h2>
              <div className="w-12 h-px bg-[#b89b6d] mx-auto"></div>
            </div>

            <div className="space-y-6">
              {desserts.map((dessert) => (
                <div key={dessert.name} className="border-b border-[#b89b6d]/20 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-[#6e4e37] tracking-wide uppercase">
                      {dessert.name}
                    </h3>
                    <span className="text-lg font-semibold text-[#b89b6d] ml-4">
                      {dessert.price} Kč
                    </span>
                  </div>
                  <p className="text-sm text-[#6e4e37]/80 italic leading-relaxed">
                    {dessert.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 lg:mb-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium text-[#6e4e37] mb-3 tracking-wide uppercase">Zmrzliny</h2>
              <div className="w-12 h-px bg-[#b89b6d] mx-auto"></div>
            </div>

            <div className="space-y-6">
              {iceCreams.map((ice) => (
                <div key={ice.name} className="border-b border-[#b89b6d]/20 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-[#6e4e37] tracking-wide uppercase">
                      {ice.name}
                    </h3>
                    <span className="text-lg font-semibold text-[#b89b6d] ml-4">
                      {ice.price} Kč
                    </span>
                  </div>
                  <p className="text-sm text-[#6e4e37]/80 italic leading-relaxed">
                    {ice.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 lg:mb-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium text-[#6e4e37] mb-3 tracking-wide uppercase">Drinky</h2>
              <div className="w-12 h-px bg-[#b89b6d] mx-auto"></div>
            </div>

            <div className="space-y-6">
              {drinks.map((drink) => (
                <div key={drink.name} className="border-b border-[#b89b6d]/20 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-[#6e4e37] tracking-wide uppercase">
                      {drink.name}
                    </h3>
                    <span className="text-lg font-semibold text-[#b89b6d] ml-4">
                      {drink.price} Kč
                    </span>
                  </div>
                  <p className="text-sm text-[#6e4e37]/80 italic leading-relaxed">
                    {drink.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

    </div>
  )
}