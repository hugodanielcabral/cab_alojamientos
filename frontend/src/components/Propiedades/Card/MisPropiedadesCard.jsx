import { Link, useNavigate } from "react-router-dom";
import { GoPencil, GoTrash } from "react-icons/go";
import { FaHistory } from "react-icons/fa";
import Swal from "sweetalert2";

export const MisPropiedadesCard = ({ propiedadesByUser, deletePropiedad }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`grid w-full gap-4 ${
        propiedadesByUser && propiedadesByUser.length === 1
          ? "justify-items-center"
          : "md:grid-cols-2"
      } justify-items-center`}
    >
      {propiedadesByUser ? (
        propiedadesByUser.map((el, index) => (
          <div
            className="mb-5 shadow-xl shadow-black bg-base-100 max-h-[400px] w-full md:w-3/4 mt-5 justify-self-center"
            key={index}
          >
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
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="btn bg-accent"
                  onClick={() =>
                    navigate(`/registro-propiedad/${el.propiedad_id}/edit`)
                  }
                >
                  <GoPencil size={25} className="text-white" />
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
                    })
                      .then((result) => {
                        if (result.isConfirmed) {
                          const response = deletePropiedad(el.propiedad_id);
                          return response;
                        }
                      })
                      .then((response) => {
                        if (response != null) {
                          Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Propiedad eliminada correctamente",
                            showConfirmButton: false,
                            timer: 1500,
                          });
                        } else {
                          Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "Error al eliminar la propiedad",
                            showConfirmButton: false,
                            timer: 1500,
                          });
                        }
                      })
                  }
                >
                  <GoTrash size={25} className="text-white" />
                </button>
                <button>
                  <Link
                    to={`/historial-reservas/${el.propiedad_id}`}
                    className="btn btn-primary"
                  >
                    <FaHistory size={25} className="text-white" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center col-span-2 mt-28">
          <h1 className="mb-5 text-3xl font-bold text-center">
            Aún no tienes propiedades publicadas
          </h1>
          <Link to="/registro-propiedad" className="btn btn-primary">
            Registra una propiedad
          </Link>
        </div>
      )}
    </div>
  );
};
