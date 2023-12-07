import { useState } from "react";
import { Button, Card, Input, Label } from "../../../UI/index.js";

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
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <Card>
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
          <Button type="submit">Enviar</Button>
        </form>
      </Card>
    </div>
  );
};
