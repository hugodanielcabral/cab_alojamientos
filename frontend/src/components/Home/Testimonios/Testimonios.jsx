import React from "react";
import { TestimoniosCard } from "./TestimoniosCard";

export const Testimonios = () => {
  const testimonialsData = [
    {
      name: "Micaela De Rossi",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      opinion:
        "¡Increíble experiencia en DonC! Definitivamente volveré a usarla.",
    },
    {
      name: "Miguel Angel",
      avatar: "https://images.unsplash.com/photo-1679679008383-6f778fe07828",
      opinion:
        "Que puedo decir. DonC es una de las mejores páginas para hacer reservas de habitaciones.",
    },
    {
      name: "Fernanda y Agustina",
      avatar: "https://images.unsplash.com/photo-1696446701796-da61225697cc",
      opinion:
        "Realmente fue muy facil de usar. Gracias por la atención. 100% recomendado.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3">
      {testimonialsData.map((testimonial, index) => (
        <TestimoniosCard key={index} {...testimonial} />
      ))}
    </div>
  );
};
