import { useParams, useNavigate } from "react-router-dom";
import { usePropiedades } from "../../../context/PropiedadesContext";
import { useEffect, useState } from "react";
import { PreviewCarousel } from "./Carousel/PreviewCarousel.jsx";
import { PreviewContent } from "./Content/PreviewContent.jsx";
import { PreviewSidebar } from "./Sidebar/PreviewSidebar.jsx";
import axios from "../../../api/axios.js";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export const PropiedadesPreview = () => {
  const { id } = useParams();
  const { getPropiedad, errors } = usePropiedades();
  const [propiedad, setPropiedad] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [excludedDates, setExcludedDates] = useState([]);
  //const { user } = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    getPropiedad(id).then((data) => {
      setPropiedad(data);
    });
  }, []);

  useEffect(() => {
    const getReservasByFecha = async () => {
      try {
        const response = await axios.get(`/reservas/fechas/${id}`);
        const fechasReservadas = response.data
          .map((reserva) => {
            const inicio = new Date(reserva.fecha_inicio);
            const fin = new Date(reserva.fecha_fin);
            const range = [];
            for (
              let dt = new Date(inicio);
              dt <= fin;
              dt.setDate(dt.getDate() + 1)
            ) {
              range.push(new Date(dt));
            }
            return range;
          })
          .flat();
        setExcludedDates(fechasReservadas);
      } catch (error) {
        console.log(error);
      }
    };
    getReservasByFecha();
  }, []);

  console.log(user);

  return (
    <>
      {propiedad ? (
        <div className="flex flex-col items-center justify-between">
          <PreviewCarousel propiedad={propiedad} />
          <div className="grid w-full grid-cols-1 md:grid-cols-3">
            <PreviewContent propiedad={propiedad} />
            <PreviewSidebar
              propiedad={propiedad}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              excludedDates={excludedDates}
              user={user}
              navigate={navigate}
              setExcludedDates={setExcludedDates}
              tomorrow={tomorrow}
              errors={errors}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
