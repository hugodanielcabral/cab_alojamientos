import { useState, useEffect } from "react";
import { Button, Input, Label, DatePickerUI, Modal } from "../../UI/index";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useReservas } from "../../../context/ReservasContext.jsx";
import { usePropiedades } from "../../../context/PropiedadesContext.jsx";
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
  FaCcAmazonPay,
} from "react-icons/fa";
import Swal from "sweetalert2";

export const ReservasForm = ({ startDate, endDate }) => {
  const { id } = useParams();
  const { createReserva, errors } = useReservas();
  const [propiedad, setPropiedad] = useState([]);
  const { getPropiedad } = usePropiedades();

  const user = JSON.parse(localStorage.getItem("user"));

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
    <div className="grid grid-cols-2 gap-4">
      <h3 className="col-span-2 my-auto text-xl font-bold text-center lg:text-3xl">
        {user.nombre}, estas a un paso de reservar una propiedad
      </h3>
      <div className="col-span-2 mx-auto">
        <Modal
          id="modal-reservas-form"
          title="Información de la reserva"
          className="relative z-10"
        >
          <h3 className="text-lg font-bold">Información de la reserva</h3>
          <div>
            <p className="mt-2 font-bold">Fechas</p>
            <p>Desde: {startDate.toLocaleDateString()}</p>
            <p>Hasta: {endDate.toLocaleDateString()}</p>
          </div>
          <div>
            <p className="mt-2 font-bold">Costo</p>
            <p>
              Total a pagar: $
              {Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) *
                propiedad.precio}
              USD
            </p>
          </div>
          <div className="text-center">
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
        </Modal>
      </div>
      <div className="col-span-2">
        <div className="shadow-xl card bg-base-100 shadow-black h-[40rem] w-[23rem] justify-center items-center md:w-[40rem] mx-auto mb-5">
          <form onSubmit={handleSubmit} className="justify-center card-body">
            <h3 className="mt-5 text-2xl font-bold text-center text-secondary">
              Información de la tarjeta
            </h3>
            <div className="flex gap-5 justify-evenly">
              <FaCcMastercard size={60} className="text-warning" />
              <FaCcVisa size={60} className="text-warning" />
              <FaCcDiscover size={60} className="text-warning" />
              <FaCcAmazonPay size={60} className="text-warning" />
            </div>
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
            <div className="justify-center mt-6 form-control">
              <Button
                type="submit"
                className="btn btn-[#212D30] mb-5 border border-white"
              >
                Pagar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
