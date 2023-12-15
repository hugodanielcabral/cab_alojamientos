import { Link, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes, userRoutes } from "./navigation.js";
import { useAuth } from "../../../context/AuthContext";

export const Navbar = () => {
  const location = useLocation();
  const { isAuth, signout, user } = useAuth();
  const isOnline = localStorage.getItem("online");

  return (
    <>
      <div className="sticky top-0 navbar bg-base-100 z-[100] border border-base-300 shadow shadow-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {isOnline
                ? privateRoutes.map((el) => (
                    <li
                      key={el.name}
                      className={
                        location.pathname === el.path ? "bordered" : ""
                      }
                    >
                      <Link to={el.path}>{el.name}</Link>
                    </li>
                  ))
                : publicRoutes.map((el) => (
                    <li
                      key={el.name}
                      className={
                        location.pathname === el.path ? "bordered" : ""
                      }
                    >
                      <Link to={el.path}>{el.name}</Link>
                    </li>
                  ))}
            </ul>
          </div>
          <Link to={"/"} className="text-xl btn btn-ghost">
            DonC Alojamientos
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            {isOnline
              ? privateRoutes.map((el) => (
                  <li
                    key={el.name}
                    className={location.pathname === el.path ? "bordered" : ""}
                  >
                    {el.name === "Explora" ? (
                      <Link to={el.path} className="font-bold text-secondary">
                        {el.name}
                      </Link>
                    ) : (
                      <Link to={el.path}>{el.name}</Link>
                    )}
                  </li>
                ))
              : publicRoutes.map((el) => (
                  <li
                    key={el.name}
                    className={location.pathname === el.path ? "bordered" : ""}
                  >
                    <Link to={el.path}>{el.name}</Link>
                  </li>
                ))}
          </ul>
        </div>
        <div className="navbar-end">
          {isAuth && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={user?.avatar} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                {isAuth
                  ? userRoutes.map((el) => (
                      <>
                        <li
                          key={el.name}
                          className={
                            location.pathname === el.path ? "bordered" : ""
                          }
                        >
                          <Link to={el.path}>{el.name}</Link>
                        </li>
                        <li>
                          <button onClick={signout}>Cerrar Sesión</button>
                        </li>
                      </>
                    ))
                  : null}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
