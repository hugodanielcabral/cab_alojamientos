import { useEffect, useState } from "react";
import axios from "../api/axios.js";
import { Testimonios } from "../components/Home/Testimonios/Testimonios.jsx";
import { HomeCard } from "../components/Home/Card/HomeCard.jsx";

const img = [
  "url(https://images.unsplash.com/photo-1499678329028-101435549a4e)",
  "url(https://images.unsplash.com/photo-1514539079130-25950c84af65)",
  "url(https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2)",
];
export const HomePage = () => {
  const [propiedades, setPropiedades] = useState([]);
  const isOnline = localStorage.getItem("online");

  useEffect(() => {
    const getPropiedades = async () => {
      try {
        const response = await axios.get("/propiedades");
        const shuffledPropiedades = shuffleArray(response.data);
        setPropiedades(shuffledPropiedades.slice(0, 3));
        console.table(shuffledPropiedades.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };
    getPropiedades();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  return (
    <div className="flex flex-col w-full">
      <div
        className="min-h-screen bg-center bg-cover shadow-sm hero shadow-black"
        style={{
          backgroundImage: img[Math.floor(Math.random() * img.length)],
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="p-0 text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-secondary">
              DonC Alojamientos
            </h1>
            <p className="mb-5 text-2xl">Encontrá tu próximo alojamiento</p>
          </div>
        </div>
      </div>
      <div className="mt-5 text-3xl text-center ">
        <h2>Descubre tu próximo nuevo destino</h2>
        <HomeCard propiedades={propiedades} isOnline={isOnline} />
        <div className="divider"></div>
        <h2 className="mt-10 text-3xl text-center text-secondary">
          Mira lo que opinan nuestros clientes!
        </h2>
        <Testimonios />
      </div>
    </div>
  );
};
