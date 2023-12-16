import { useState } from "react";
import { Button, Input, Label, Select } from "../../../UI/index.js";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext.jsx";
import { arreglo_paises } from "../../../../data/index.js";
import Swal from "sweetalert2";

export const RegisterForm = () => {
  const { signup, errors } = useAuth();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    contrasena: "",
    pais: "",
    rol: "CLIENTE",
  });
  const [showContrasena, setShowContrasena] = useState(false);

  const toggleContrasena = () => setShowContrasena(!showContrasena);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        nombre: formValues.nombre,
        correo: formValues.email,
        contrasena: formValues.contrasena,
        pais: formValues.pais,
        rol: formValues.rol,
      };
      const response = await signup(data);
      if (response) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Usuario registrado correctamente",
          showConfirmButton: true,
          timer: 2000,
          background: "#06657F",
          color: "white",
          iconColor: "white",
          backdrop: "rgba(0,0,0,0.5)",
        }).then(() => {
          navigate("/login");
        });
      }
      /* const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": true,
        },
        credentials: "include",
        body: JSON.stringify({
          nombre: nombre,
          correo: formValues.email,
          contrasena: formValues.contrasena,
          pais: pais,
          rol: rol,
        }),
      }); */
    } catch (error) {
      console.log(error);
    }
  };

  const getErrorMessage = (errors, path) => {
    if (!errors) return null;
    const error = errors.find((error) => error.path === path);
    return error ? error.msg : null;
  };

  return (
    <div className="h-full p-10 lg:px-28 mb-10 mt-10 bg-[#06657F] border shadow-black shadow-xl rounded-xl ">
      <h1 className="text-3xl text-center pointer-events-none">Registrate</h1>
      <form onSubmit={handleSubmit}>
        <Label>
          <div className="label">
            <span className="text-lg text-white label-text">Nombre</span>
          </div>
          <Input
            name="nombre"
            id="nombre"
            onChange={handleChange}
            value={formValues.nombre}
            autoComplete="off"
          />
          <p className="mt-3 text-sm font-bold text-center text-red-500">
            {getErrorMessage(errors, "nombre")}
          </p>
        </Label>
        <Label>
          <div className="label">
            <span className="text-lg text-white label-text">Correo</span>
          </div>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formValues.email}
          />
          <p className="mt-3 text-sm font-bold text-center text-red-500">
            {getErrorMessage(errors, "correo")}
          </p>
        </Label>
        <Label>
          <label className="label"></label>
          <div className="label">
            <span className="text-lg text-white label-text">Contraseña</span>
          </div>
          <div className="relative">
            <Button
              className={
                errors
                  ? "absolute bottom-23 right-0 flex items-center pr-3 text-2xl text-white"
                  : "absolute inset-y-0 right-0 flex items-center pr-3 text-2xl text-white"
              }
              type="button"
              onClick={toggleContrasena}
            >
              {!showContrasena ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
            </Button>
            <Input
              type={!showContrasena ? "password" : "text"}
              name="contrasena"
              id="contrasena"
              onChange={handleChange}
              value={formValues.contrasena}
            />
            <p className="mt-3 text-sm font-bold text-center text-red-500">
              {getErrorMessage(errors, "contrasena")}
            </p>
          </div>
        </Label>
        <Label>
          <div className="label">
            <span className="text-lg text-white label-text">Pais</span>
          </div>
          <Select
            name="pais"
            id="pais"
            onChange={handleChange}
            value={formValues.pais}
          >
            <option value="">Pais</option>
            {arreglo_paises.map((pais) => (
              <option key={pais} value={pais}>
                {pais}
              </option>
            ))}
          </Select>
          <p className="mt-3 text-sm font-bold text-center text-red-500">
            {getErrorMessage(errors, "pais")}
          </p>
        </Label>
        <Button
          type="submit"
          className="btn btn-[#212D30] mb-5 border border-white mt-5 w-full text-xl text-white"
        >
          Registrarse
        </Button>
        <div className="flex justify-between my-4">
          <p>Ya tienes una cuenta?</p>
          <Link to="/login" className="font-bold underline">
            Inicia sesion
          </Link>
        </div>
      </form>
    </div>
  );
};
