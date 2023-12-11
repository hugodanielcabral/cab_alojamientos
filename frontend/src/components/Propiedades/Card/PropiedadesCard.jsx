export const PropiedadesCard = ({ propiedades, categoria }) => {
  console.log(propiedades.img_portada);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {categoria === "Todos"
        ? propiedades.map((el, index) => (
            <div className="shadow-xl bg-base-100" key={index}>
              <figure className="h-48 overflow-hidden">
                <img
                  src={el.img_portada}
                  alt={`Imagen de ${el.nombre}`}
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </figure>
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold">{el.nombre}</h2>
                <p>{`${el.provincia}, ${el.localidad}`}</p>
                <p>${el.precio} por noche</p>
                <div className="mt-4">
                  <button className="btn btn-primary">Ver</button>
                </div>
              </div>
            </div>
          ))
        : propiedades.map((el, index) => {
            if (el.categoria === categoria) {
              return (
                <div className="shadow-xl bg-base-100" key={index}>
                  <figure className="h-48 overflow-hidden">
                    <img
                      src={el.img_portada}
                      alt={`Imagen de ${el.nombre}`}
                      className="object-cover w-full h-full rounded-t-xl"
                    />
                  </figure>
                  <div className="p-4 text-center">
                    <h2 className="text-lg font-bold">{el.nombre}</h2>
                    <p>{`${el.provincia}, ${el.localidad}`}</p>
                    <p>${el.precio} por noche</p>
                    <div className="mt-4">
                      <button className="btn btn-primary">Ver</button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
    </div>
  );
};
