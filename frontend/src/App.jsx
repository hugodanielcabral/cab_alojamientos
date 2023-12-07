import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<h1 className="text-3xl text-yellow-400">Home</h1>}
      />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
