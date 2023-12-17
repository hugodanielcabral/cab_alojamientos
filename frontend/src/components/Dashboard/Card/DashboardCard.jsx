import { Link } from "react-router-dom";
export const DashboardCard = ({ user }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-10 text-3xl text-center">
        Bienvenido <strong className="text-secondary">{user.nombre}</strong> a
        tu dashboard
      </h1>
      <h3 className="mt-5 text-2xl">¿Qué deseas hacer?</h3>
      <div className="flex flex-wrap justify-center gap-5 mt-10 mb-5">
        {/* <Link
          to={"/"}
          className="shadow-xl card w-96 bg-base-100 image-full shadow-black"
        >
          <figure>
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
              alt="Manejo de propiedades"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gestionar Propiedades</h2>
            <p>Desactiva o activa las propiedades que infringen las normas</p>
          </div>
        </Link> */}

        <Link
          to={"/dashboard/user"}
          className="shadow-xl card w-96 bg-base-100 image-full shadow-black"
        >
          <figure>
            <img
              src="https://images.unsplash.com/photo-1417733403748-83bbc7c05140"
              alt="Manejo de usuarios"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gestionar Usuarios</h2>
            <p>Bloquea a los usuarios o asignale un rol a uno</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
