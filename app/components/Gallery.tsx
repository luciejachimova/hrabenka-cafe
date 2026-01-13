
import Image from "next/image";

export default function Gallery() {

  const photos = [

    {
      src: "/images/gallery/cafe-1.jpg",
      alt: "Interiér kavárny Hraběnka",
      category: "interiér"
    },
    {
      src: "/images/gallery/cafe-3.jpg",
      alt: "Exteriér kavárny",
      category: "exteriér"
    },
    {
      src: "/images/gallery/coffee-1.jpg",
      alt: "Šálek cappuccina",
      category: "káva"
    },
    {
      src: "/images/gallery/dessert-1.jpg",
      alt: "Domácí cheesecake",
      category: "dezerty"
    },
    {
      src: "/images/gallery/cafe-2.jpg",
      alt: "Útulný koutek kavárny",
      category: "interiér"
    },
    {
      src: "/images/gallery/coffee-2.jpg",
      alt: "Latte art",
      category: "káva"
    },
    {
      src: "/images/gallery/dessert-2.jpg",
      alt: "Hraběnčin dort",
      category: "dezerty"
    },
    {
      src: "/images/gallery/breakfast-1.jpg",
      alt: "Snídaně",
      category: "snídaně"
    },
    {
      src: "/images/gallery/icecream-1.jpg",
      alt: "Zmrzlinové poháry",
      category: "zmrzlina"
    }
  ];

  return (
    <div className="bg-[#fdf6ee] min-h-screen py-24">

      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-[#6e4e37] font-medium mb-4">
            Galerie
          </h2>
          <div className="w-16 h-px bg-[#b89b6d] mx-auto mb-6"></div>
          <p className="text-[#6e4e37]/70 font-light max-w-2xl mx-auto text-lg">
            Nahlédněte do naší kavárny a ochutnejte atmosféru očima
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#b89b6d]/20 to-[#6e4e37]/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="text-4xl mb-2 block opacity-30">📷</span>
                  <p className="text-[#6e4e37]/50 text-sm italic">
                    {photo.alt}
                  </p>
                </div>
              </div>

              {/* Tento kod odkomentujete az budete mit fotky: */}
              {/*
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#6e4e37]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-light">
                    {photo.alt}
                  </p>
                  <span className="text-[#b89b6d] text-xs uppercase tracking-wider">
                    {photo.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {photos.length === 0 && (
        <div className="max-w-2xl mx-auto text-center py-20">
          <span className="text-6xl mb-4 block">📸</span>
          <h3 className="text-2xl font-serif text-[#6e4e37] mb-3">
            Galerie se připravuje
          </h3>
          <p className="text-[#6e4e37]/70">
            Brzy zde najdete fotografie z naší kavárny
          </p>
        </div>
      )}
    </div>
  );
}