import { useState, useEffect } from "react";
import { Button, Input, Label, DatePickerUI } from "../../UI/index";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useReservas } from "../../../context/ReservasContext.jsx";
import { usePropiedades } from "../../../context/PropiedadesContext.jsx";
import Swal from "sweetalert2";

export const ReservasForm = ({ startDate, endDate }) => {
  const { id } = useParams();
  const { createReserva, errors } = useReservas();
  const [propiedad, setPropiedad] = useState([]);
  const { getPropiedad } = usePropiedades();

  const navigate = useNavigate();

  if (!startDate || !endDate) {
    return (window.location.href = "/");
  }

  const [formValues, setFormValues] = useState({
    propiedad_id: id,
    fecha_inicio: startDate,
    fecha_fin: endDate,
    tarjeta: "",
    vencimiento: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createReserva(formValues);
      console.log(response);
      if (response) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Reserva creada exitosamente",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/mis-reservas");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getPropiedadById = async () => {
      try {
        const response = await getPropiedad(id);
        setPropiedad(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPropiedadById();
  }, []);

  return (
    <div className="grid grid-cols-6 gap-1">
      <div className="flex flex-col items-center justify-center col-span-6 grid-rows-1">
        <h1 className="mb-6 text-3xl font-bold text-center text-primary">
          Confirmá y pagá
        </h1>
        <h3 className="text-2xl font-bold text-center text text-secondary">
          Reglas basicas
        </h3>
        <h4>
          Les pedimos a todos los huéspedes que tengan en cuenta algunos
          detalles que hacen que un huésped sea excelente.
        </h4>
        <ul className="list-disc">
          <li>Seguí normas de la casa.</li>
          <li>Tratá el alojamiento de tu anfitrión como si fuera tu casa</li>
        </ul>
      </div>
      <div className="col-span-3">
        <h2 className="text-2xl font-bold text-secondary">
          Información de la reserva
        </h2>
        <p className="mt-2 font-bold">Fechas</p>
        <p>Desde: {startDate.toLocaleDateString()}</p>
        <p>Hasta: {endDate.toLocaleDateString()}</p>
        <p className="mt-2 font-bold">Costo</p>
        <p>
          Total a pagar: $
          {Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) *
            propiedad.precio}{" "}
          USD
        </p>
        <p className="mt-2 font-bold">Propiedad</p>
        <p>{propiedad.nombre}</p>
        <div className="avatar">
          <div className="w-24 rounded">
            <Link to={`/propiedades/${id}`}>
              <img src={propiedad.img_portada} />
            </Link>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="col-span-3">
        <h3 className="text-2xl font-bold text text-secondary">
          Información de la tarjeta
        </h3>
        <Label>
          <div className="label">
            <span className="label-text">Número de tarjeta</span>
          </div>
          <Input
            onChange={handleChange}
            value={formValues.tarjeta.trim()}
            name="tarjeta"
            id="tarjeta"
            errors={errors}
          />
        </Label>
        <label htmlFor="vencimiento" className="block label">
          <span className="label-text">Fecha de vencimiento</span>
        </label>
        <DatePickerUI
          onChange={(date) =>
            setFormValues({ ...formValues, vencimiento: date })
          }
          selected={formValues.vencimiento}
          name="vencimiento"
          id="vencimiento"
          errors={errors}
        />
        <Label>
          <div className="label">
            <span className="label-text">CVV</span>
          </div>
          <Input
            onChange={handleChange}
            value={formValues.cvv}
            name="cvv"
            id="cvv"
            errors={errors}
          />
        </Label>
        <div className="w-3/4 mt-6 form-control">
          <Button
            type="submit"
            className="btn btn-[#212D30] mb-5 border border-white"
          >
            Pagar
          </Button>
        </div>
      </form>
    </div>
  );
};
