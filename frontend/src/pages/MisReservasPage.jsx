import { useReservas } from "../context/ReservasContext";
import { MisReservasCard } from "../components/Reservas/MisReservas/Card/MisReservasCard";

export const MisReservasPage = () => {
  const { reservas, deleteReserva } = useReservas();

  return (
    <div className="flex flex-col w-3/4">
      <h1 className="text-3xl text-center">Mis Reservas</h1>
      <MisReservasCard reservas={reservas} deleteReserva={deleteReserva} />
    </div>
  );
};
