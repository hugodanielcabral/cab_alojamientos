import Router from "express";
import {
  getReservas,
  createReserva,
  updateReserva,
  deleteReserva,
  getReserva,
} from "../controllers/reservas.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/reservas", isAuth, getReservas);

router.get("/reservas/:id", isAuth, getReserva);

router.post("/reservas", isAuth, createReserva);

router.put("/reservas/:id", isAuth, updateReserva);

router.delete("/reservas/:id", isAuth, deleteReserva);

export default router;
