"use client";
//importando
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function Carrusel({ data }) {
  // Cambia la imagen cada 4 segundos
  const [activeIndex, setActiveIndex] = useState(0);

  // Temporizador para cambiar de imagen automáticamente
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide(); // Cambiar al siguiente slide automáticamente
    }, 4000);

    // Limpiar el temporizador al desmontar el componente o cambiar la imagen manualmente
    return () => clearInterval(timer);
  }, [activeIndex]); // Se reinicia cada vez que activeIndex cambie

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % data.length);
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + data.length) % data.length);
  };

  // Función para ir a un slide específico
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="w-[350px] overflow-hidden relative  h-[250px] rounded-3xl"
      id="carouselExampleCaptions"
    >
      {data.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2.3s] ease-in-out ${
            index === activeIndex ? "bg-opacity-5 bg-zinc-100" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== activeIndex}
        >
          <img
            src={image.src.toString()}
            alt={image.alt.toString()}
            className="w-full h-full object-cover"
          />
          {/*<div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-white bg-gradient-to-t from-black via-black/50 to-transparent">*/}
          <div className="absolute bottom-0 left-0 right-0 px-2 py-2">  
          <h5 className="text-xl font-bold mb-0 text-center bg-slate-500/30 ">
              {image.heading}
            </h5>
            <p className="text-sm text-center mb-4 bg-slate-500/30 text-white">
              {image.description}
            </p>
          </div>
        </div>
      ))}

      {/* Botón para ir al slide anterior */}
      <button
        className="absolute top-1/2 left-0 -translate-y-1/2 z-20 text-black text-opacity-50 hover:text-white p-2 rounded-full"
        onClick={() => {
          prevSlide(); // Cambia al slide anterior
        }}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-9 w-9" />
        <span className="sr-only">Previous</span>
      </button>

      {/* Botón para ir al siguiente slide */}
      <button
        className="absolute top-1/2 right-0 -translate-y-1/2 z-20 text-black text-opacity-50 hover:text-white p-2 rounded-full"
        onClick={() => {
          nextSlide(); // Cambia al siguiente slide
        }}
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-9 w-9" />
        <span className="sr-only">Next</span>
      </button>

      {/* Indicadores (botones) para navegar entre los slides */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {data.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-10 h-1 rounded-[11px] ${
              index === activeIndex ? "bg-blue-700" : "bg-blue-400 opacity-50"
            }`}
            onClick={() => goToSlide(index)} // Cambia al slide seleccionado
            aria-label={`Slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : "false"}
          ></button>
        ))}
      </div>
    </div>
  );
}
