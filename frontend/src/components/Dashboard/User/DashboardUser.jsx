import { DashboardTable } from "./Table/DashboardTable";
import axios from "../../../api/axios.js";
import { useEffect, useState } from "react";
import { DashboardUserBuscador } from "./Buscador/DashboardUserBuscador.jsx";

export const DashboardUser = () => {
  const [users, setUsers] = useState({
    data: [],
    currentPage: 1,
    totalPages: 0,
  });

  useEffect(() => {
    const getUsers = async (page = 1) => {
      try {
        const response = await axios.get(`/usuarios?page=${page}`);
        setUsers({
          data: response.data.data,
          currentPage: response.data.currentPage,
          totalPages: response.data.totalPages,
        });
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    getUsers(users.currentPage);
  }, [users.currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= users.totalPages) {
      setUsers((prevState) => ({ ...prevState, currentPage: newPage }));
    }
  };

  const handleCheckboxChange = async (userId) => {
    try {
      await axios.patch(`/usuarios/${userId}`, {
        activo: !users.data.find((user) => user.usuario_id === userId).activo,
      });
      setUsers((prevState) => ({
        ...prevState,
        data: prevState.data.map((user) =>
          user.usuario_id == userId ? { ...user, activo: !user.activo } : user
        ),
      }));
    } catch (error) {
      console.error("Failed to toggle user role:", error);
    }
  };

  return (
    <div className="flex-col items-center block p-3">
      <h1 className="mb-4 text-3xl font-bold">Listado de usuarios</h1>
      <DashboardUserBuscador
        users={users.data}
        handleCheckboxChange={handleCheckboxChange}
      />
      <DashboardTable
        users={users.data}
        onPageChange={handlePageChange}
        totalPages={users.totalPages}
        currentPage={users.currentPage}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};
