import { useAuth } from "../context/AuthContext";
import { useReservas } from "../context/ReservasContext";
import { MisReservasCard } from "../components/Reservas/MisReservas/Card/MisReservasCard";

export const MisReservasPage = () => {
  const { reservas, deleteReserva } = useReservas();

  return (
    <div>
      <MisReservasCard reservas={reservas} deleteReserva={deleteReserva} />
    </div>
  );
};
