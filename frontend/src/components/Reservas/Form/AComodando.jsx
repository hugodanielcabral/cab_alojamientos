import React from "react";

export const AComodando = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mb-6 text-3xl font-bold text-primary">
          Confirmá y pagá
        </h1>
        <h3 className="text-2xl font-bold text-secondary">Reglas básicas</h3>
        <h4>
          Les pedimos a todos los huéspedes que tengan en cuenta algunos
          detalles que hacen que un huésped sea excelente.
        </h4>
        <ul className="list-disc">
          <p>Seguí normas de la casa.</p>
          <p>Tratá el alojamiento de tu anfitrión como si fuera tu casa.</p>
        </ul>
      </div>
      <div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary">
            Información de la reserva
          </h2>
          <p className="mt-2 font-bold">Fechas</p>
          <p>Desde: {startDate.toLocaleDateString()}</p>
          <p>Hasta: {endDate.toLocaleDateString()}</p>
        </div>
        <div className="text-center">
          <p className="mt-2 font-bold">Costo</p>
          <p>
            Total a pagar: $
            {Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) *
              propiedad.precio}{" "}
            USD
          </p>
        </div>
        <div className="text-center">
          <p className="mt-2 font-bold">Propiedad</p>
          <p>{propiedad.nombre}</p>
          <div className="avatar">
            <div className="w-24 rounded">
              <Link to={`/propiedades/${id}`}>
                <img src={propiedad.img_portada} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
