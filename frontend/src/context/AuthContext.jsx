import { createContext, useState, useContext, useEffect } from "react";
import axios from "../api/axios.js";
import Cookie from "js-cookie";

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
      setUser(response.data);

      return response;
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
      return response.data;
    } catch (error) {
      setErrors(error.response.data.errors);
      console.log(error.response.data.errors);
    }
  };

  const signout = async () => {
    const response = await axios.post("/signout");
    setUser(null);
    setIsAuth(false);
    localStorage.clear("online");
  };

  useEffect(() => {
    if (Cookie.get("token")) {
      axios
        .get("/profile")
        .then((response) => {
          setUser(response.data);
          setIsAuth(true);
          localStorage.setItem("online", true);
        })
        .catch((error) => {
          console.log(error);
          setUser(null);
          setIsAuth(false);
          localStorage.setItem("online", false);
        });
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{ user, isAuth, errors, signup, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
