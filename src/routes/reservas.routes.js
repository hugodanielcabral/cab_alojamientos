import Router from "express";
import {
  getReservas,
  createReserva,
  updateReserva,
  deleteReserva,
  getReserva,
  getReservasByFecha,
} from "../controllers/reservas.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import {
  validateCreate,
  validateUpdate,
} from "../validators/reservas.validation.js";

const router = Router();

router.get("/reservas", isAuth, getReservas);

router.get("/reservas/:id", isAuth, getReserva);

router.get("/reservas/fechas/:id", isAuth, getReservasByFecha);

router.post("/reservas", isAuth, validateCreate, createReserva);

router.put("/reservas/:id", isAuth, validateUpdate, updateReserva);

router.delete("/reservas/:id", isAuth, deleteReserva);

export default router;
