import { useEffect, useState } from "react";
import { Button, Card, Input, Label } from "../../../UI/index.js";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext.jsx";

export const RegisterForm = () => {
  const { signup, errors } = useAuth();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    contrasena: "",
  });
  const [showContrasena, setShowContrasena] = useState(false);

  const toggleContrasena = () => setShowContrasena(!showContrasena);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const nombre = "dani";
  const pais = "Argentina";
  const rol = "ADMIN";

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
        nombre: nombre,
        correo: formValues.email,
        contrasena: formValues.contrasena,
        pais: pais,
        rol: rol,
      };
      const response = await signup(data);
      if (response.status === 200) navigate("/login");
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
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
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
