import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#f7e9d6]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-[#6e4e37] rounded-full flex items-center justify-center">
              <Image
                src="/images/hrabenka.png"
                alt="Hraběnka logo"
                width={80}
                height={80}
                className="object-cover rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-serif text-[#6e4e37] font-medium">Hraběnka</h1>
              <p className="text-xs uppercase tracking-[0.2em] text-[#b89b6d] font-light">
                Kavárna & Cukrárna
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#onas"
              className="text-[#6e4e37] font-light hover:text-[#b89b6d] transition-colors duration-300 relative group"
            >
              O nás
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b89b6d] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#nabidka"
              className="text-[#6e4e37] font-light hover:text-[#b89b6d] transition-colors duration-300 relative group"
            >
              Nabídka
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b89b6d] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#galerie"
              className="text-[#6e4e37] font-light hover:text-[#b89b6d] transition-colors duration-300 relative group"
            >
              Galerie
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b89b6d] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#kontakt"
              className="text-[#6e4e37] font-light hover:text-[#b89b6d] transition-colors duration-300 relative group"
            >
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b89b6d] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <button className="md:hidden flex flex-col space-y-1 p-2">
            <span className="w-6 h-0.5 bg-[#6e4e37] transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-[#6e4e37] transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-[#6e4e37] transition-all duration-300"></span>
          </button>

        </div>
      </div>
    </header>
  )
}