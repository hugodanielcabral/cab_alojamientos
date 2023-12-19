import { Link } from "react-router-dom";

export const PropiedadesCard = ({ propiedades, categoria }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
      {categoria === "Todos" ? (
        propiedades.map((el, index) => (
          <Link to={`/propiedades/${el.propiedad_id}`} key={index}>
            <div className="flex flex-col h-full mb-5 shadow-2xl shadow-slate-900 bg-base-100 hover:shadow-slate-700 hover:shadow-xl">
              <figure className="h-48 overflow-hidden">
                <img
                  src={el.img_portada}
                  alt={`Imagen de ${el.nombre}`}
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </figure>
              <div className="flex-grow p-4 text-center">
                <h2 className="text-lg font-bold">{el.nombre}</h2>
                <p>{`${el.provincia}, ${el.localidad}`}</p>
                <p>${el.precio} USD por noche</p>
              </div>
            </div>
          </Link>
        ))
      ) : propiedades.filter((el) => el.categoria === categoria).length > 0 ? (
        propiedades.map((el, index) => {
          if (el.categoria === categoria) {
            return (
              <Link to={`/propiedades/${el.propiedad_id}`} key={index}>
                <div className="flex flex-col h-full mb-5 shadow-xl bg-base-100">
                  <figure className="h-48 overflow-hidden">
                    <img
                      src={el.img_portada}
                      alt={`Imagen de ${el.nombre}`}
                      className="object-cover w-full h-full rounded-t-xl"
                    />
                  </figure>
                  <div className="flex-grow p-4 text-center">
                    <h2 className="text-lg font-bold">{el.nombre}</h2>
                    <p>{`${el.provincia}, ${el.localidad}`}</p>
                    <p>${el.precio} USD por noche</p>
                  </div>
                </div>
              </Link>
            );
          }
          return null;
        })
      ) : (
        <p className="text-center col-span-full">
          No hay propiedades en esta categoría.
        </p>
      )}
    </div>
  );
};
