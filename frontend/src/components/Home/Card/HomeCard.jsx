import { Link } from "react-router-dom";
export const HomeCard = ({ propiedades, isOnline }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-10 md:grid-cols-3">
      {propiedades.map((propiedad) => (
        <Link
          to={isOnline ? `/propiedades/${propiedad.propiedad_id}` : "/login"}
          key={propiedad.propiedad_id}
        >
          <div className="flex flex-col h-full mb-5 shadow-2xl shadow-slate-900 bg-base-100 hover:shadow-slate-700 hover:shadow-xl">
            <figure className="h-48 overflow-hidden">
              <img
                src={propiedad.img_portada}
                alt={`Imagen de ${propiedad.nombre}`}
                className="object-cover w-full h-full rounded-t-xl"
              />
            </figure>
            <div className="flex-grow p-4 text-center">
              <h2 className="text-lg font-bold">{propiedad.nombre}</h2>
              <p>{`${propiedad.provincia}, ${propiedad.localidad}`}</p>
              <p>${propiedad.precio} USD por noche</p>
            </div>
          </div>
        </Link>
      ))}
      {!propiedades && (
        <div className="flex items-center justify-center col-span-3 mx-auto lg:col-span-3">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
};
