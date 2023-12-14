import { createContext, useContext, useState } from "react";
import axios from "../api/axios.js";

const ReservaContext = createContext();

export const useReservas = () => {
  if (!useReservas) {
    throw new Error("useReservas debe ser usado dentro del ReservasProvider");
  }
  return useContext(ReservaContext);
};

export const ReservasProvider = ({ children }) => {
  const [reservas, setReservas] = useState([]);
  const [errors, setErrors] = useState(null);

  const getReservas = async () => {
    try {
      const response = await axios.get("/reservas");
      setReservas(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getReserva = async (id) => {
    try {
      const response = await axios.get(`/reservas/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createReserva = async (reserva) => {
    try {
      const response = await axios.post("/reservas", reserva);
      setReservas([...reservas, response.data]);
      return response.data;
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.errors);
    }
  };

  const deleteReserva = async (id) => {
    try {
      await axios.delete(`/reservas/${id}`);
      setReservas(reservas.filter((reserva) => reserva.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReservaContext.Provider
      value={{
        reservas,
        getReservas,
        getReserva,
        createReserva,
        deleteReserva,
        errors,
      }}
    >
      {children}
    </ReservaContext.Provider>
  );
};
