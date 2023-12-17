import React from "react";

export const DashboardTable = ({
  users,
  onPageChange,
  totalPages,
  currentPage,
  handleCheckboxChange,
}) => {
  const renderPagination = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`join-item btn ${i === currentPage ? "btn-active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="p-5 overflow-x-auto rounded-lg shadow bg-base-200 shadow-black ">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Pais</th>
            <th>Rol</th>
            <th>Usuario ID</th>
            <th>Estado</th>
            <th>Activar/Desactivar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.usuario_id}>
              <th>{(currentPage - 1) * users.length + index + 1}</th>
              <td>{user.nombre}</td>
              <td>{user.correo}</td>
              <td>{user.pais}</td>
              <td>{user.rol}</td>
              <td>{user.usuario_id}</td>
              <td>{user.activo ? "Activo" : "Inactivo"}</td>
              <td>
                {user.rol != "ADMIN" && (
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <input
                        type="checkbox"
                        {...(user.activo
                          ? { checked: true }
                          : { checked: false })}
                        onChange={() => handleCheckboxChange(user.usuario_id)}
                        className="mx-auto checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mx-auto text-center pagination">{renderPagination()}</div>
    </div>
  );
};
