import { useState } from "react";
import Swal from "sweetalert2";

export const DashboardUserBuscador = ({ users, handleCheckboxChange }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire("Error", "Por favor, introduce un correo", "error");
      return;
    }

    const user = users.find((user) => user.correo === email.trim());
    if (!user) {
      Swal.fire("Error", "Usuario no encontrado", "error");
      return;
    } else if (user) {
      Swal.fire({
        icon: "success",
        title: `${user.nombre}`,
        html: `
              <p>ID: ${user.usuario_id}</p>
              <p>Correo: ${user.correo}</p>
              <p>Rol: ${user.rol}</p>
              <p>Estado: ${user.activo ? "Activo" : "Inactivo"}</p>
              `,
        showConfirmButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
      setEmail("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar usuario"
          className="mb-5 input input-bordered"
          value={email}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
};
