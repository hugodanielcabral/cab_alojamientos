import Router from "express-promise-router";
import {
  getPropiedades,
  createPropiedad,
  updatePropiedad,
  deletePropiedad,
  getPropiedad,
} from "../controllers/propiedades.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
/* import {
  createPropiedadSchema,
  updatePropiedadSchema,
} from "../schemas/propiedades.schema.js"; */
import {
  validateCreate,
  validateUpdate,
} from "../validators/propiedades.validation.js";
const router = Router();

router.get("/propiedades", isAuth, getPropiedades);

router.get("/propiedades/:id", isAuth, getPropiedad);

router.post("/propiedades", isAuth, validateCreate, createPropiedad);

router.put("/propiedades/:id", isAuth, validateUpdate, updatePropiedad);

router.delete("/propiedades/:id", isAuth, deletePropiedad);

export default router;
