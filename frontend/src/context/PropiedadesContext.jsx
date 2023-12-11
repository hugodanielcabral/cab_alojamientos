import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios.js";

const PropiedadContext = createContext();

export const usePropiedades = () => {
  if (!usePropiedades) {
    throw new Error(
      "usePropiedades debe ser usado dentro del PropiedadesProvider"
    );
  }
  return useContext(PropiedadContext);
};

export const PropiedadesProvider = ({ children }) => {
  const [propiedades, setPropiedades] = useState([]);
  const [errors, setErrors] = useState(null);

  const getPropiedades = async () => {
    try {
      const response = await axios.get("/propiedades");
      setPropiedades(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPropiedad = async (propiedad) => {
    try {
      const response = await axios.post("/propiedades", propiedad);
      setPropiedades([...propiedades, response.data]);
      return response.data;
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.errors);
    }
  };

  useEffect(() => {
    getPropiedades();
  }, []);

  return (
    <PropiedadContext.Provider
      value={{ propiedades, createPropiedad, errors, setErrors }}
    >
      {children}
    </PropiedadContext.Provider>
  );
};
