import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const MisPropiedadesCard = ({ propiedadesByUser, deletePropiedad }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {propiedadesByUser ? (
        propiedadesByUser.map((el, index) => (
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
                  onClick={() =>
                    Swal.fire({
                      title: "¿Seguro que quieres eliminar esta propiedad?",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Si, eliminar",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        deletePropiedad(el.propiedad_id);
                        Swal.fire(
                          "Eliminado!",
                          "La propiedad ha sido eliminada.",
                          "success"
                        );
                      }
                    })
                  }
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
