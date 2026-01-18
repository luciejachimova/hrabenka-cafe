"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = {
  src: string;
  alt: string;
};

export default function Gallery() {
  const photos: Photo[] = [
    { src: "/images/gallery/photo-1.jpg", alt: "Interiér kavárny Hraběnka" },
    { src: "/images/gallery/photo-5.jpg", alt: "Káva a dezert" },
    { src: "/images/gallery/photo-10.jpg", alt: "Dekorace" },
    { src: "/images/gallery/photo-4.jpg", alt: "Domácí dezert" },
    { src: "/images/gallery/photo-9.jpg", alt: "Útulný koutek kavárny" },
    { src: "/images/gallery/photo-7.jpg", alt: "Šálek cappuccina" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const prev = () => {
    setActiveIndex((i) => {
      if (i === null) return i;
      return i === 0 ? photos.length - 1 : i - 1;
    });
  };

  const next = () => {
    setActiveIndex((i) => {
      if (i === null) return i;
      return i === photos.length - 1 ? 0 : i + 1;
    });
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* GALERIE */}
      <div className="bg-[#fdf6ee] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              fill
              className="object-contain"
            />

            <button
              onClick={close}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              ✕
            </button>

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            >
              ›
            </button>

            {/* popisek */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm opacity-80">
              {photos[activeIndex].alt}
            </div>
          </div>
        </div>
      )}
    </>
  );
}