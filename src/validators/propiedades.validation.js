import { check } from "express-validator";
import { validateResult } from "../libs/validationResult.js";

export const validateCreate = [
  check("nombre").exists().notEmpty(),
  check("descripcion").exists().notEmpty({}),
  check("ubicacion").exists().notEmpty().isLength(),
  check("precio")
    .exists()
    .isNumeric()
    .notEmpty()
    .custom((value, { req }) => {
      console.log(req.body, value);
      if (value < 10000 || value > 100000) {
        throw new Error("El precio debe estar entre 10000 y 100000");
      }
      return true;
    }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const validateUpdate = [
  check("nombre").exists().notEmpty(),
  check("descripcion").exists().notEmpty({}),
  check("ubicacion").exists().notEmpty().isLength(),
  check("precio")
    .exists()
    .isNumeric()
    .notEmpty()
    .custom((value, { req }) => {
      console.log(req.body, value);
      if (value < 10000 || value > 100000) {
        throw new Error("El precio debe estar entre 10000 y 100000");
      }
      return true;
    }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
