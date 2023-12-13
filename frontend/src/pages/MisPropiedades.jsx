import { useEffect, useState } from "react";
import { usePropiedades } from "../context/PropiedadesContext";
import { useAuth } from "../context/AuthContext";
import { MisPropiedadesCard } from "../components/Propiedades/Card/MisPropiedadesCard";

export const MisPropiedades = () => {
  const { getPropiedadByUser, deletePropiedad, propiedades } = usePropiedades();
  const { user } = useAuth();
  const [propiedadesByUser, setPropiedadesByUser] = useState([]);

  useEffect(() => {
    const getPropiedades = async () => {
      try {
        if (!user) return;
        const response = await getPropiedadByUser(user.usuario_id);
        setPropiedadesByUser(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPropiedades();
  }, [propiedades]);

  return (
    <MisPropiedadesCard
      propiedadesByUser={propiedadesByUser}
      deletePropiedad={deletePropiedad}
    />
  );
};
