import { useLocation } from "react-router-dom";
import { ReservasForm } from "../components/Reservas/Form/ReservasForm";

export const ReservaPage = () => {
  const location = useLocation();

  const { startDate, endDate } = location.state || {};
  return (
    <>
      <ReservasForm startDate={startDate} endDate={endDate} />
    </>
  );
};
