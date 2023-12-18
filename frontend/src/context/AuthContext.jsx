import { createContext, useState, useContext, useEffect } from "react";
import axios from "../api/axios.js";
import Cookie from "js-cookie";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro del AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);

  console.log(isAuth, "isAuth");

  const signup = async (data) => {
    try {
      const response = await axios.post("/signup", data);
      //setUser(response.data);
      //setIsAuth(true);
      //localStorage.setItem("online", true);
      return response.data;
    } catch (error) {
      setErrors(error.response.data.errors);
      console.log(error.response.data.errors);
    }
  };

  const signin = async (data) => {
    try {
      const response = await axios.post("/signin", data);
      setUser(response.data);
      setIsAuth(true);
      localStorage.setItem("online", true);
      localStorage.setItem("user", JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.errors);
        console.log(error.response.status);
        if (error.response.status === 403) {
          Swal.fire({
            icon: "error",
            title: "Tu usuario fue bloqueado",
            text: "Por favor comunicate con el administrador",
          });
        }
        console.log(error.response.headers);
        setErrors(error.response.data.errors);
      }
    }
  };

  const signout = async () => {
    const response = await axios.post("/signout");
    setUser(null);
    setIsAuth(false);
    localStorage.clear("online");
    localStorage.clear("user");
  };

  const profile = async () => {
    try {
      const response = await axios.get("/profile");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Cookie.get("token")) {
      axios
        .get("/profile")
        .then((response) => {
          setUser(response.data);
          setIsAuth(true);
          localStorage.setItem("isAuth", true);
          localStorage.setItem("online", true);
        })
        .catch((error) => {
          console.log(error);
          setUser(null);
          setIsAuth(false);
          localStorage.removeItem("online", false);
          localStorage.removeItem("isAuth", false);
          Cookie.remove("token");
        });
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{ user, isAuth, errors, signup, signin, signout, profile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
