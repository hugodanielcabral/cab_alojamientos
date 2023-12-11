import { Link, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./navigation.js";
import { useAuth } from "../../../context/AuthContext";

export const Navbar = () => {
  const location = useLocation();
  const { isAuth, signout } = useAuth();
  const isOnline = localStorage.getItem("online");

  return (
    <nav className="navbar bg-base-100">
      <ul className="p-0 menu menu-horizontal">
        {isOnline ? (
          <>
            {privateRoutes.map((el) => (
              <li
                key={el.name}
                className={location.pathname === el.path ? "bordered" : ""}
              >
                <Link to={el.path}>{el.name}</Link>
              </li>
            ))}
            <li>
              <Link onClick={signout} to="/">
                Logout
              </Link>
            </li>
          </>
        ) : (
          publicRoutes.map((el) => (
            <li
              key={el.name}
              className={location.pathname === el.path ? "bordered" : ""}
            >
              <Link to={el.path}>{el.name}</Link>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};
