import Router from "express-promise-router";
import {
  getPropiedades,
  createPropiedad,
  updatePropiedad,
  deletePropiedad,
  getPropiedad,
} from "../controllers/propiedades.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/propiedades", isAuth, getPropiedades);

router.get("/propiedades/:id", isAuth, getPropiedad);

router.post("/propiedades", isAuth, createPropiedad);

router.put("/propiedades/:id", isAuth, updatePropiedad);

router.delete("/propiedades/:id", isAuth, deletePropiedad);

export default router;
