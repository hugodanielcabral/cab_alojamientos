import { useState } from "react";
import { Input } from "../../../UI/Input";
import { Label } from "../../../UI/Label";

export const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    contrasena: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <>
      <h1 className="text-3xl text-teal-400">Formulario</h1>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formValues.email}
          placeholder="Ingresa tu correo"
        />
        <Label htmlFor="contrasena">Contraseña</Label>
        <Input
          type="password"
          name="contrasena"
          id="contrasena"
          onChange={handleChange}
          value={formValues.contrasena}
          placeholder="Ingresa tu contraseña"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-green-400 text-black rounded hover:bg-green-500"
        >
          Crear cuenta
        </button>
      </form>
    </>
  );
};
