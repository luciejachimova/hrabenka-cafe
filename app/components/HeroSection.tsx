import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-white flex flex-col justify-center items-center pt-20 px-6">
      <div className="text-center max-w-4xl mx-auto">

        <div className="w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white border-2 border-[#6e4e37] rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 overflow-hidden">
          <Image
            src="/images/hrabenka.png"
            alt="Hraběnka logo"
            width={320}
            height={320}
            className="object-cover rounded-full"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-serif text-[#6e4e37] mb-6 font-light">
          Hraběnka
        </h1>

        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="w-16 h-px bg-[#b89b6d]"></div>
          <p className="text-xl text-[#b89b6d] font-light uppercase tracking-[0.5em]">
            Kavárna & Cukrárna
          </p>
          <div className="w-16 h-px bg-[#b89b6d]"></div>
        </div>

        <p className="text-xl text-[#6e4e37]/70 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
          Elegance a chuť v srdci města — poctivá káva, domácí dezerty, klidná atmosféra
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#nabidka"
            className="bg-[#6e4e37] text-white px-10 py-4 font-light uppercase tracking-wider hover:bg-[#b89b6d] transition-colors duration-300 text-sm"
          >
            Prohlédnout menu
          </a>

        </div>
      </div>

      <div className="absolute top-1/3 left-20 w-2 h-2 bg-[#b89b6d] rounded-full opacity-40 animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-24 w-1 h-1 bg-[#b89b6d] rounded-full opacity-60 animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/2 left-1/4 w-px h-8 bg-[#b89b6d]/30 hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-1/3 w-px h-12 bg-[#b89b6d]/30 hidden lg:block"></div>
    </section>
  )
}