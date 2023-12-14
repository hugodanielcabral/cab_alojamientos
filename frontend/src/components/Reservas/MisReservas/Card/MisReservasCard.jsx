import React from "react";
import Swal from "sweetalert2";

export const MisReservasCard = ({ reservas, deleteReserva }) => {
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
    <div className="grid grid-cols-2 gap-4 mt-5">
      {reservas ? (
        reservas.map((el, index) => (
          <div className="mb-5 shadow-xl bg-base-100 max-h-[400px]" key={index}>
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
        <div>No hay propiedades</div>
      )}
    </div>
  );
};
