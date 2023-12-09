import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Input, Label } from "../../../UI";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";
import { useAuth } from "../../../../context/AuthContext";

export const LoginForm = () => {
  const { signin, errors } = useAuth();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      correo: formValues.email,
      contrasena: formValues.contrasena,
    };
    try {
      const user = await signin(data);

      if (user) navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center">
      <Card>
        {errors &&
          errors.map((error, index) => {
            return (
              <p key={index} className="font-bold text-center text-red-600">
                {error.msg}
              </p>
            );
          })}
        <h1>Login</h1>
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
          <Button type="submit">Ingresar</Button>
          <div className="flex justify-between my-4">
            <p>¿No tienes una cuenta?</p>
            <Link to="/register" className="font-bold underline">
              Registrate
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};
