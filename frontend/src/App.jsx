import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { About } from "./pages/About";
import { PropiedadesPage } from "./pages/PropiedadesPage";

export const App = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <Routes>
        <Route path="/propiedades" element={<PropiedadesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoute isAllowed={!user} />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route
          path="/about"
          element={
            <ProtectedRoute isAllowed={!!user && user.rol === "ADMIN"}>
              <About />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
};
