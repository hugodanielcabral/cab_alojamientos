import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="font-bold text-red-500 pointer-events-none text-9xl animate-bounce">
        ?
      </h2>
      <h1 className="text-3xl text-center">
        No se encontro la pagina solicitada
      </h1>
      <button className="mt-5 btn btn-secondary" onClick={() => navigate("/")}>
        Volver al inicio
      </button>
    </div>
  );
};
