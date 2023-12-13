import { useState } from "react";
import { Button, Card, Input, Label, Select } from "../../../UI/index.js";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";
import axios from "axios";
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

  const createUser = async () => {
    const response = axios.post("http://localhost:3000/api/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        nombre: nombre,
        correo: formValues.email,
        contrasena: formValues.contrasena,
        pais: pais,
        rol: rol,
      },
    });
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
          title: "Usuario creado exitosamente",
          showConfirmButton: false,
          timer: 1500,
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

  return (
    <div className="flex items-center justify-center">
      <Card>
        {errors && (
          <div className="text-red-500">
            {errors.map((error, index) => (
              <p key={index}>{error.msg}</p>
            ))}
          </div>
        )}
        <h1>Formulario</h1>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="nombre">Nombre</Label>
          <Input
            type="text"
            name="nombre"
            id="nombre"
            onChange={handleChange}
            value={formValues.nombre}
            placeholder="Ingresa tu nombre"
            required
          />
          <Label htmlFor="email">Correo</Label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formValues.email}
            placeholder="Ingresa tu correo"
            required
          />
          <Label htmlFor="contrasena">Contraseña</Label>
          <div className="relative">
            <Input
              type={!showContrasena ? "password" : "text"}
              name="contrasena"
              id="contrasena"
              onChange={handleChange}
              value={formValues.contrasena}
              placeholder="Ingresa tu contraseña"
              required
            />
            <Select
              name="pais"
              id="pais"
              onChange={handleChange}
              value={formValues.pais}
              required
              className="w-full max-w-xs my-3 select select-bordered"
            >
              <option value="">Pais</option>
              {arreglo_paises.map((pais) => (
                <option key={pais} value={pais}>
                  {pais}
                </option>
              ))}
            </Select>

            <Button
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-2xl text-black"
              type="button"
              onClick={toggleContrasena}
            >
              {!showContrasena ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
            </Button>
          </div>
          <Button type="submit">Registrarse</Button>
          <div className="flex justify-between my-4">
            <p>Ya tienes una cuenta?</p>
            <Link to="/login" className="font-bold underline">
              Inicia sesion
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};
