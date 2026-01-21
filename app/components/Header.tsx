import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDF6EE]/95 backdrop-blur-sm border-b border-[#f7e9d6]">
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

        </div>
      </div>
    </header>
  )
}