import Router from "express-promise-router";
import {
  getPropiedades,
  createPropiedad,
  updatePropiedad,
  deletePropiedad,
  getPropiedad,
  getPropiedadByUser,
} from "../controllers/propiedades.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import {
  validateCreate,
  validateUpdate,
} from "../validators/propiedades.validation.js";
const router = Router();

router.get("/propiedades", getPropiedades);

router.get("/propiedades/:id", isAuth, getPropiedad);

router.get("/usuarios/propiedades/:id", isAuth, getPropiedadByUser);

router.post("/propiedades", isAuth, validateCreate, createPropiedad);

router.put("/propiedades/:id", isAuth, validateUpdate, updatePropiedad);

router.delete("/propiedades/:id", isAuth, deletePropiedad);

export default router;
