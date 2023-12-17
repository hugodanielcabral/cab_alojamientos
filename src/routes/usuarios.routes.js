import Router from "express";
import {
  getUsuarios,
  getUsuario,
  desactivarUsuario,
} from "../controllers/usuarios.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/usuarios", isAuth, getUsuarios);

router.get("/usuarios/:id", isAuth, getUsuario);

router.patch("/usuarios/:id", isAuth, desactivarUsuario);

export default router;
