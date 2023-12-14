import { check } from "express-validator";
import { validateResult } from "../libs/validationResult.js";

export const validateCreate = [
  check("propiedad_id").exists().notEmpty().isNumeric(),
  check("fecha_inicio").exists().notEmpty(),
  check("fecha_fin").exists().notEmpty(),
  check("tarjeta")
    .exists()
    .notEmpty()
    .isLength({ min: 19, max: 19 })
    .withMessage("Tarjeta inválida, recorda dejar espacios cada 4 dígitos"),
  check("vencimiento").exists().notEmpty(),
  check("cvv").exists().notEmpty().isLength({ min: 3, max: 4 }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const validateUpdate = [
  check("propiedad_id").exists().notEmpty().isNumeric(),
  check("fecha_inicio").exists().notEmpty(),
  check("fecha_fin").exists().notEmpty(),
  check("tarjeta")
    .exists()
    .notEmpty()
    .isLength({ min: 19, max: 19 })
    .withMessage("Tarjeta inválida, recorda dejar espacios cada 4 dígitos"),
  check("vencimiento").exists().notEmpty(),
  check("cvv").exists().notEmpty().isLength({ min: 3, max: 4 }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
