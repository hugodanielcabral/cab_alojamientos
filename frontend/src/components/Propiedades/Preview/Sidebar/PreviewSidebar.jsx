import { useEffect, useState } from "react";
import { Button, DatePickerUI } from "../../../UI/index.js";
import axios from "../../../../api/axios.js";
import Swal from "sweetalert2";
export const PreviewSidebar = ({
  propiedad,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  user,
  navigate,
  setExcludedDates,
  excludedDates,
  tomorrow,
}) => {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    const getUsuario = async () => {
      try {
        const response = await axios.get(`/usuarios/${propiedad.usuario_id}`);
        setUsuario(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsuario();
  }, [propiedad]);
  return (
    <div className="col-span-1 mx-auto mt-5 md:col-span-1 md:mt-0">
      <div className="sticky mt-5 mb-5 top-20">
        <div className="border shadow-lg card bg-base-100 border-base-500 shadow-black">
          <div className="card-body">
            <p className="text-xl font-bold text-center">
              Publicado por: {usuario && usuario.nombre}
            </p>
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
                  !startDate || !endDate
                    ? Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Debes seleccionar un rango de fechas!",
                      })
                    : navigate(`/reservas/${propiedad.propiedad_id}`, {
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
                        new Date(startDate).setDate(startDate.getDate() + 1)
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
  );
};
