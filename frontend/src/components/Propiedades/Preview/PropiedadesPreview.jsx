import { useParams } from "react-router-dom";
import { usePropiedades } from "../../../context/PropiedadesContext";
import { useEffect, useState } from "react";

export const PropiedadesPreview = () => {
  const { id } = useParams();
  const { getPropiedad } = usePropiedades();
  const [propiedad, setPropiedad] = useState([]);

  useEffect(() => {
    getPropiedad(id).then((data) => {
      setPropiedad(data);
    });
  }, []);
  return (
    <>
      {propiedad ? (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center text-primary">
            {propiedad.nombre}
          </h1>
          <p>
            {propiedad.provincia}, {propiedad.localidad}
          </p>
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <div className="col-span-2 row-span-2">
              <img
                src={propiedad.img_portada}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src={propiedad.img_habitacion}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src={propiedad.img_comedor}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
