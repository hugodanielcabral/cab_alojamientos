import { useAuth } from "../../../../context/AuthContext";
import { Link } from "react-router-dom";
import { Loading } from "../../../UI/index.js";

export const ProfileDatos = () => {
  const { user } = useAuth();

  if (!user) {
    return <Loading />;
  }

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center col-span-3 lg:col-span-1">
          <div className="w-full p-3 mt-5 border shadow-xl bg-base-100 card md:w-72 lg:w-96 border-base-500 shadow-black lg:mt-0">
            <div className="justify-center avatar">
              <div className="w-24 rounded-full">
                <img src={user.avatar} alt={`Avatar de ${user.name}`} />
              </div>
            </div>
            <div className=" card-body">
              <h2 className="justify-center card-title text-primary">
                {user.nombre}
              </h2>
              <p className="text-center text-white">{user.correo}</p>
              <p className="text-center text-white">
                Telefono: {user.telefono}
              </p>
              <p className="text-center text-secondary">{user.rol}</p>
              <div className="justify-end card-actions"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center col-span-3 lg:col-span-2">
          <div className="flex flex-col w-full lg:flex-row">
            <Link
              to="/mis-reservas"
              className="w-full shadow-xl card md:w-72 lg:w-96 bg-base-100 image-full shadow-black"
            >
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1497302347632-904729bc24aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mis reservas"
                />
              </figure>
              <div className="card-body">
                <h2 className="my-auto text-2xl font-bold text-center">
                  Mis reservas
                </h2>
              </div>
            </Link>
            <div className="my-4 divider lg:divider-horizontal lg:my-0 divider-secondary"></div>
            <Link
              to={"/mis-propiedades"}
              className="w-full mb-5 shadow-xl card md:w-72 lg:w-96 bg-base-100 image-full shadow-black lg:mb-0"
            >
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mis propiedades"
                />
              </figure>
              <div className="card-body">
                <h2 className="my-auto text-2xl font-bold text-center">
                  Mis propiedades
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
