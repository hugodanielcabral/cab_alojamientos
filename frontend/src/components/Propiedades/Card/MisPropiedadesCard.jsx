import { useNavigate } from "react-router-dom";

export const MisPropiedadesCard = ({ propiedades, deletePropiedad }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {propiedades ? (
        propiedades.map((el, index) => (
          <div className="mb-5 shadow-xl bg-base-100 max-h-[400px]" key={index}>
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
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    navigate(`/registro-propiedad/${el.propiedad_id}/edit`)
                  }
                >
                  Editar
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => deletePropiedad(el.propiedad_id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No hay propiedades</div>
      )}
    </div>
  );
};
