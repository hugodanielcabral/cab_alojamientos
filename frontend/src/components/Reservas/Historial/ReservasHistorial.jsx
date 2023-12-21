import { useParams, Link, useNavigate } from "react-router-dom";
import { usePropiedades } from "../../../context/PropiedadesContext";
import { useEffect, useState } from "react";
import { ReservasHistorialTable } from "./Table/ReservasHistorialTable";

export const ReservasHistorial = () => {
  const { id } = useParams();
  const [historialReservas, setHistorialReservas] = useState([]);
  const { getHistorialReservas } = usePropiedades();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    const getHistorial = async () => {
      try {
        const response = await getHistorialReservas(id);
        setHistorialReservas(response);

        if (response[0].propietario_id != user.usuario_id) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getHistorial();
  }, []);

  console.log(historialReservas);

  return (
    <div className="p-5">
      {!historialReservas || historialReservas.length < 1 ? (
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="mt-24 text-2xl font-bold text-center">
            No hay reservas
          </h1>
          <Link to="/mis-propiedades" className="text-center btn btn-primary">
            Volver a Mis Propiedades
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-center">
            {!!historialReservas && historialReservas.length > 0
              ? `Historial de reservas ${historialReservas[0].nombre_propiedad}`
              : ""}
          </h1>
          <ReservasHistorialTable
            historialReservas={historialReservas}
            setHistorialReservas={setHistorialReservas}
          />
        </>
      )}
    </div>
  );
};
