import { createContext, useState, useContext } from "react";
import axios from "axios";
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

  const signup = async (data) => {
    const response = await axios.post(
      "http://localhost:3000/api/signup",
      data,
      { withCredentials: true }
    );
    console.log(response);
    setUser(response.data);
  };

  const signin = async (data) => {
    const response = await axios.post(
      "http://localhost:3000/api/signin",
      data,
      {
        withCredentials: true,
      }
    );
    setUser(response.data);
    setIsAuth(true);
  };

  return (
    <AuthContext.Provider value={{ user, isAuth, errors, signup, signin }}>
      {children}
    </AuthContext.Provider>
  );
};
