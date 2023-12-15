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
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPropiedad = async (id) => {
    try {
      const response = await axios.get(`/propiedades/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPropiedadByUser = async (id) => {
    try {
      const response = await axios.get(`/usuarios/propiedades/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.errors);
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

  const updatePropiedad = async (id, propiedad) => {
    try {
      const response = await axios.put(`/propiedades/${id}`, propiedad);
      setPropiedades(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      setErrors(error.response.data.errors);
    }
  };

  const deletePropiedad = async (id) => {
    try {
      const response = await axios.delete(`/propiedades/${id}`);
      setPropiedades(propiedades.filter((propiedad) => propiedad.id !== id));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPropiedades();
  }, []);

  return (
    <PropiedadContext.Provider
      value={{
        getPropiedad,
        getPropiedadByUser,
        createPropiedad,
        updatePropiedad,
        deletePropiedad,
        errors,
        propiedades,
        setErrors,
      }}
    >
      {children}
    </PropiedadContext.Provider>
  );
};
