import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import propiedadesRoutes from "./routes/propiedades.routes.js";
import authRoutes from "./routes/auth.routes.js";
import reservasRoutes from "./routes/reservas.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// CORS
app.use(
  cors({
    origin: "https://donc-alojamientos.onrender.com",
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to DonC Alojamiento API",
  });
});
app.use("/api", propiedadesRoutes);
app.use("/api", reservasRoutes);
app.use("/api", authRoutes);
app.use("/api", usuariosRoutes);

// Error Handling
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app;
