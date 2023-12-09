import { Link, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./navigation.js";
import { useAuth } from "../../../context/AuthContext";

export const Navbar = () => {
  const location = useLocation();
  const { isAuth, signout } = useAuth();
  console.log(location.pathname);
  return (
    <div>
      <nav className="p-6 text-2xl text-black bg-white">
        <ul className="flex gap-6 justify-evenly">
          {isAuth ? (
            <>
              {privateRoutes.map((el) => (
                <li
                  key={el.name}
                  className={
                    location.pathname === el.path ? "active text-red-500" : ""
                  }
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
                className={
                  location.pathname === el.path ? "active text-red-500" : ""
                }
              >
                <Link to={el.path}>{el.name}</Link>
              </li>
            ))
          )}
        </ul>
      </nav>
    </div>
  );
};
