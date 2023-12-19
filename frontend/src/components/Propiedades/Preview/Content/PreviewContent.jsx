import React from "react";

export const PreviewContent = ({ propiedad }) => {
  return (
    <div className="p-5 md:col-span-2">
      <h1 className="mt-5 text-xl font-bold text-center md:text-3xl text-primary">
        {propiedad.nombre}
      </h1>
      <p className="text-center ">
        {propiedad.provincia}, {propiedad.localidad}
      </p>

      <p className="mt-5 text-xl font-bold text-center text-white md:text-3xl">
        Acerca de esta propiedad
      </p>
      <p className="text-xl text-center md:text-3xl">{propiedad.descripcion}</p>

      {/* Contenido adicional */}

      <p className="mt-5 text-xl font-bold text-center text-white md:text-3xl">
        ¿Que ofrece esta propiedad?
      </p>

      <ul>
        <li className="text-xl text-center md:text-3xl">
          <p>Habitaciones: {propiedad.cant_habitaciones}</p>
        </li>
        <li className="text-xl text-center md:text-3xl">
          <p>Camas: {propiedad.cant_camas}</p>
        </li>
        <li className="text-xl text-center md:text-3xl">
          <p>Baños: {propiedad.cant_banios}</p>
        </li>
      </ul>
    </div>
  );
};
