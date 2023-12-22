import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useReservas } from "../../../../context/ReservasContext";

export const MisReservasCard = ({ reservas }) => {
  const { deleteReserva } = useReservas();

  // Función para formatear la fecha
  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const opciones = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return fecha.toLocaleDateString("es-ES", opciones);
  };

  return (
    <div
      className={`grid w-full gap-4 ${
        reservas.length === 1 ? "justify-items-center" : "md:grid-cols-2"
      }`}
    >
      {reservas.length !== 0 ? (
        reservas.map((el, index) => (
          <div
            className="mb-5 shadow-xl shadow-black bg-base-100 max-h-[400px] w-full md:w-3/4 mt-5 justify-self-center"
            key={index}
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={el.portada}
                alt={`Imagen de ${el.nombre_propiedad}`}
                className="object-cover w-full h-full rounded-t-xl"
              />
            </figure>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold">{el.nombre_propiedad}</h2>
              <p>{`${formatearFecha(el.fecha_inicio)} al ${formatearFecha(
                el.fecha_fin
              )}`}</p>
              <div className="mt-4">
                <button
                  className="btn btn-error"
                  onClick={() =>
                    Swal.fire({
                      title: "¿Seguro que quieres cancelar esta reserva?",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Si, cancelar",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        deleteReserva(el.reserva_id);
                        Swal.fire(
                          "Cancelada!",
                          "La reserva ha sido cancelada.",
                          "success"
                        );
                      }
                    })
                  }
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center col-span-2 mt-52">
          <h1 className="mb-5 text-3xl font-bold">Aún no tienes reservas</h1>
          <Link to="/propiedades" className=" btn btn-primary">
            Explora las propiedades
          </Link>
        </div>
      )}
    </div>
  );
};
