import { Router } from "express";
import {
  getPropiedades,
  createPropiedad,
  updatePropiedad,
  deletePropiedad,
  getPropiedad,
} from "../controllers/propiedades.controller.js";

const router = Router();

router.get("/propiedades", getPropiedades);

router.get("/propiedades/:id", getPropiedad);

router.post("/propiedades", createPropiedad);

router.put("/propiedades/:id", updatePropiedad);

router.delete("/propiedades/:id", deletePropiedad);

export default router;
