import { useEffect, useState } from "react";
import { usePropiedades } from "../context/PropiedadesContext";
import { useAuth } from "../context/AuthContext";
import { MisPropiedadesCard } from "../components/Propiedades/Card/MisPropiedadesCard";

export const MisPropiedades = () => {
  const { getPropiedadByUser, deletePropiedad } = usePropiedades();
  const { user } = useAuth();
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    const getPropiedades = async () => {
      try {
        const response = await getPropiedadByUser(user.usuario_id);
        setPropiedades(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPropiedades();
  }, [propiedades]);

  return (
    <>
      <MisPropiedadesCard
        propiedades={propiedades}
        deletePropiedad={deletePropiedad}
      />
    </>
  );
};
