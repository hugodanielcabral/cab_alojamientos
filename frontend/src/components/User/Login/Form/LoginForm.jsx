import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Label } from "../../../UI";
import { LiaEyeSolid, LiaEyeSlashSolid } from "react-icons/lia";
import { useAuth } from "../../../../context/AuthContext";
import Swal from "sweetalert2";
import { useEffect } from "react";

export const LoginForm = () => {
  const { signin, errors, setErrors } = useAuth();
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

      if (user) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Bienvenido ${user.nombre}`,
          showConfirmButton: true,
          timer: 2500,
          background: "#06657F",
          color: "white",
          iconColor: "white",
          backdrop: "rgba(0,0,0,0.5)",
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getErrorMessage = (errors, path) => {
    if (!errors) return null;

    const error = errors.find((error) => error.path === path);
    return error ? error.msg : null;
  };

  const resetErrors = () => {
    setErrors(null);
  };

  useEffect(() => {
    resetErrors();
  }, []);

  return (
    <div className="h-full p-10 lg:px-28 mb-10 mt-10 bg-[#06657F] border shadow-black shadow-xl rounded-xl ">
      <h1 className="text-3xl text-center pointer-events-none">
        Iniciar Sesion
      </h1>
      <form onSubmit={handleSubmit}>
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
            placeholder="Ingresa tu correo"
          />
          <p className="mt-3 text-sm font-bold text-center text-red-500">
            {getErrorMessage(errors, "correo")}
          </p>
        </Label>
        <br />
        <Label>
          <span className="text-lg text-white label-text">Contraseña</span>
          <div className="relative">
            <Input
              type={!showContrasena ? "password" : "text"}
              name="contrasena"
              id="contrasena"
              onChange={handleChange}
              value={formValues.contrasena}
              placeholder="Ingresa tu contraseña"
            />

            <Button
              className={
                errors
                  ? "absolute bottom-10 right-0 flex items-center pr-3 text-2xl text-white"
                  : "absolute bottom-6 right-0 flex items-center pr-3 text-2xl text-white"
              }
              type="button"
              onClick={toggleContrasena}
            >
              {!showContrasena ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
            </Button>
            <p className="mt-3 text-sm font-bold text-center text-red-500">
              {getErrorMessage(errors, "contrasena")}
            </p>
          </div>
        </Label>
        <Button
          type="submit"
          className="btn btn-[#212D30] mb-5 border border-white mt-5 w-full text-xl text-white"
        >
          Ingresar
        </Button>
        <div className="flex justify-between my-4">
          <p>¿No tienes una cuenta?</p>
          <Link to="/register" className="font-bold underline">
            Registrate
          </Link>
        </div>
      </form>
    </div>
  );
};
