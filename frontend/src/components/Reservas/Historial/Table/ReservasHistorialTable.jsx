import { useReservas } from "../../../../context/ReservasContext";

export const ReservasHistorialTable = ({
  historialReservas,
  setHistorialReservas,
}) => {
  const { deleteReserva } = useReservas();

  const handleDelete = async (id) => {
    await deleteReserva(id);
    setHistorialReservas(
      historialReservas.filter((reserva) => reserva.reserva_id !== id)
    );
  };

  return (
    <div className="mt-5 overflow-x-auto rounded-lg shadow bg-base-200 shadow-black">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Propiedad</th>
            <th>Fecha de inicio</th>
            <th>Fecha de fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {historialReservas.map((reserva) => {
            return (
              <tr key={reserva.reserva_id}>
                <td>{reserva.reserva_id}</td>
                <td>{reserva.nombre_usuario}</td>
                <td>{reserva.correo}</td>
                <td>{reserva.nombre_propiedad}</td>
                <td>
                  {new Date(reserva.fecha_inicio).toLocaleDateString("es-ES")}
                </td>
                <td>
                  {new Date(reserva.fecha_fin).toLocaleDateString("es-ES")}
                </td>
                <td>
                  <button
                    className="text-white bg-red-500 btn"
                    onClick={() => handleDelete(reserva.reserva_id)}
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
