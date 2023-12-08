import { check } from "express-validator";
import { validateResult } from "../libs/validationResult.js";

export const validateCreate = [
  check("propiedad_id").exists().notEmpty().isNumeric(),
  check("fecha_inicio").exists().notEmpty(),
  check("fecha_fin").exists().notEmpty().optional(),
  check("estado").exists().notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const validateUpdate = [
  check("propiedad_id").exists().notEmpty().isNumeric(),
  check("fecha_inicio").exists().notEmpty(),
  check("fecha_fin").exists().notEmpty().optional(),
  check("estado").exists().notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
