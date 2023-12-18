import { useState, useEffect } from "react";
import { Label, Input, Button, Select, Textarea } from "../../../UI/index.js";
import { usePropiedades } from "../../../../context/PropiedadesContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import {
  provincias_argentinas,
  categorias_propiedades,
} from "../../../../data/index.js";
import Swal from "sweetalert2";

export const RegistroPropiedadForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPropiedad, createPropiedad, updatePropiedad, errors, setErrors } =
    usePropiedades();
  const [formValues, setFormValues] = useState({
    nombre: "",
    descripcion: "",
    provincia: "",
    localidad: "",
    categoria: "",
    precio: "",
    cant_habitaciones: "",
    cant_camas: "",
    cant_banios: "",
    img_portada: "",
    img_habitacion: "",
    img_banio: "",
    img_comedor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const reset = () => {
    setFormValues({
      nombre: "",
      descripcion: "",
      provincia: "",
      localidad: "",
      categoria: "",
      precio: "",
      cant_habitaciones: "",
      cant_camas: "",
      cant_banios: "",
      img_portada: "",
      img_habitacion: "",
      img_banio: "",
      img_comedor: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const response = await updatePropiedad(id, formValues);
        if (response) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Propiedad actualizada correctamente",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            reset();
            navigate("/mis-propiedades");
          });
        }
      } else {
        const response = await createPropiedad(formValues);
        if (response) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Propiedad creada correctamente",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            reset();
            navigate("/mis-propiedades");
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Edit
  useEffect(() => {
    if (id) {
      setErrors(null);
      getPropiedad(id).then((propiedad) => {
        setFormValues({
          nombre: propiedad?.nombre,
          descripcion: propiedad?.descripcion,
          provincia: propiedad?.provincia,
          localidad: propiedad?.localidad,
          categoria: propiedad?.categoria,
          precio: propiedad?.precio,
          cant_habitaciones: propiedad?.cant_habitaciones,
          cant_camas: propiedad?.cant_camas,
          cant_banios: propiedad?.cant_banios,
          img_portada: propiedad?.img_portada,
          img_habitacion: propiedad?.img_habitacion,
          img_banio: propiedad?.img_banio,
          img_comedor: propiedad?.img_comedor,
        });
      });
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="mt-2 mb-5 text-3xl font-bold text-center text-primary">
          {id ? "Editar propiedad" : "Registrar propiedad"}
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-secondary">
              Información principal
            </h3>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">Nombre</span>
              </div>
              <Input
                onChange={handleChange}
                value={formValues.nombre}
                name="nombre"
                id="nombre"
                errors={errors}
              />
            </Label>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">
                  Descripción
                </span>
              </div>
              <Textarea
                onChange={handleChange}
                value={formValues.descripcion}
                name="descripcion"
                id="descripcion"
                errors={errors}
              />
            </Label>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">Provincia</span>
              </div>
              <Select
                onChange={handleChange}
                value={formValues.provincia}
                name="provincia"
                id="provincia"
                errors={errors}
              >
                <option value="">Elige...</option>
                {provincias_argentinas.map((provincia, index) => (
                  <option key={index} value={provincia}>
                    {provincia}
                  </option>
                ))}
              </Select>
            </Label>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">Localidad</span>
              </div>
              <Input
                onChange={handleChange}
                value={formValues.localidad}
                name="localidad"
                id="localidad"
                errors={errors}
              />
            </Label>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">Categoría</span>
              </div>
              <Select
                onChange={handleChange}
                value={formValues.categoria}
                name="categoria"
                id="categoria"
                errors={errors}
              >
                <option value="">Elige...</option>
                {categorias_propiedades.map((categoria, index) => (
                  <option key={index} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </Select>
            </Label>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">Precio</span>
              </div>
              <Input
                text="number"
                onChange={handleChange}
                value={formValues.precio}
                name="precio"
                id="precio"
                errors={errors}
              />
            </Label>
          </div>

          <div>
            <h3 className="text-xl font-bold text-secondary">Cantidades</h3>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">
                  Número de habitaciones
                </span>
              </div>
              <Input
                text="number"
                onChange={handleChange}
                value={formValues.cant_habitaciones}
                name="cant_habitaciones"
                id="cant_habitaciones"
                errors={errors}
              />
            </Label>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">
                  Número de Camas
                </span>
              </div>
              <Input
                text="number"
                onChange={handleChange}
                value={formValues.cant_camas}
                name="cant_camas"
                id="cant_camas"
                errors={errors}
              />
            </Label>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">
                  Número de Baños
                </span>
              </div>
              <Input
                text="number"
                onChange={handleChange}
                value={formValues.cant_banios}
                name="cant_banios"
                id="cant_banios"
                errors={errors}
              />
            </Label>
          </div>

          <div>
            <h3 className="text-xl font-bold text-secondary">Imágenes</h3>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">Portada</span>
              </div>
              <Input
                onChange={handleChange}
                value={formValues.img_portada}
                name="img_portada"
                id="img_portada"
                errors={errors}
              />
            </Label>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">
                  Imagen de habitación
                </span>
              </div>
              <Input
                onChange={handleChange}
                value={formValues.img_habitacion}
                name="img_habitacion"
                id="img_habitacion"
                errors={errors}
              />
            </Label>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">
                  Imagen de baño
                </span>
              </div>
              <Input
                onChange={handleChange}
                value={formValues.img_banio}
                name="img_banio"
                id="img_banio"
                errors={errors}
              />
            </Label>
            <Label>
              <div className="label">
                <span className="text-lg text-white label-text">
                  Imagen de comedor
                </span>
              </div>
              <Input
                onChange={handleChange}
                value={formValues.img_comedor}
                name="img_comedor"
                id="img_comedor"
                errors={errors}
              />
            </Label>
          </div>
        </div>

        <div className="w-1/4 mx-auto mt-6 form-control">
          <Button
            type="submit"
            className="btn btn-[#212D30] mb-5 border border-white"
          >
            Registrar
          </Button>
        </div>
      </form>
    </div>
  );
};
