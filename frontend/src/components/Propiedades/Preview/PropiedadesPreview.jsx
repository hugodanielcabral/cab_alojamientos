import { useParams, useNavigate } from "react-router-dom";
import { usePropiedades } from "../../../context/PropiedadesContext";
import { useEffect, useState } from "react";
import { Button, DatePickerUI } from "../../UI/index.js";
import axios from "../../../api/axios.js";
import { useAuth } from "../../../context/AuthContext.jsx";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export const PropiedadesPreview = () => {
  const { id } = useParams();
  const { getPropiedad } = usePropiedades();
  const [propiedad, setPropiedad] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [excludedDates, setExcludedDates] = useState([]);
  const { user } = useAuth();
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
    <div className="bg-secondary-content">
      {propiedad ? (
        <div className="flex flex-col items-center justify-between">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
            <div className="md:col-span-2 md:row-span-2">
              <img
                src={propiedad.img_portada}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src={propiedad.img_habitacion}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src={propiedad.img_comedor}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Contenido principal */}
          <div className="grid w-full grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2">
              <h1 className="mt-5 text-xl font-bold text-center md:text-3xl text-primary">
                {propiedad.nombre}
              </h1>
              <p className="text-center ">
                {propiedad.provincia}, {propiedad.localidad}
              </p>

              <p className="mt-5 text-xl font-bold text-center md:text-3xl text-primary">
                Acerca de esta propiedad
              </p>
              <p className="text-xl text-center md:text-3xl">
                {propiedad.descripcion}
              </p>

              {/* Contenido adicional */}

              <p className="mt-5 text-xl font-bold text-center md:text-3xl text-primary">
                ¿Que ofrece esta propiedad?
              </p>

              <ul>
                <li className="text-xl text-center md:text-3xl">
                  <p>Habitaciones: {propiedad.cant_habitaciones}</p>
                </li>
                <li className="text-xl text-center md:text-3xl">
                  <p>Camas: {propiedad.cant_camas}</p>
                </li>
                <li className="text-xl text-center md:text-3xl">
                  <p>Baños: {propiedad.cant_banios}</p>
                </li>
              </ul>
            </div>

            <div className="col-span-1 mx-auto mt-5 md:col-span-1 md:mt-0">
              <div className="sticky mt-5 mb-5 top-20">
                <div className="shadow-xl card bg-base-100">
                  <div className="card-body">
                    <h1 className="text-xl font-bold md:text-3xl card-title text-primary">
                      ${propiedad.precio} USD por noche
                    </h1>
                    {propiedad.usuario_id == user.usuario_id ? (
                      <Button
                        className="btn btn-secondary disabled:text-red-700"
                        disabled
                        onClick={() =>
                          navigate(`/reservas/${propiedad.propiedad_id}`, {
                            state: {
                              startDate,
                              endDate,
                            },
                          })
                        }
                      >
                        No puedes reservar una propiedad que creas!
                      </Button>
                    ) : (
                      <Button
                        className="btn btn-secondary"
                        onClick={() =>
                          navigate(`/reservas/${propiedad.propiedad_id}`, {
                            state: {
                              startDate,
                              endDate,
                            },
                          })
                        }
                      >
                        Reservar
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 mb-5">
                    <label
                      htmlFor="arrival-date"
                      className="block text-sm font-medium text-primary"
                    >
                      Selecciona el día de llegada:
                    </label>
                    <div className="mt-1">
                      <DatePickerUI
                        id="arrival-date"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        excludeDates={excludedDates}
                        minDate={tomorrow}
                      />
                    </div>

                    <label
                      htmlFor="departure-date"
                      className="block text-sm font-medium text-primary"
                    >
                      Selecciona el día de salida:
                    </label>
                    <div className="mt-1">
                      <DatePickerUI
                        id="departure-date"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={
                          startDate
                            ? new Date(
                                startDate.setDate(startDate.getDate() + 1)
                              )
                            : tomorrow
                        }
                        excludeDates={excludedDates}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
