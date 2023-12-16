import { check } from "express-validator";
import { validateResult } from "../libs/validationResult.js";

export const validateSignup = [
  check("nombre")
    .exists()
    .notEmpty()
    .withMessage("El nombre es requerido")
    .isLength({ min: 1, max: 255 }),
  check("correo")
    .exists()
    .notEmpty()
    .withMessage("El correo es requerido")
    .isEmail()
    .withMessage("Email inválido"),
  check("contrasena")
    .exists()
    .notEmpty()
    .withMessage("La contraseña es requerida")
    .isString()
    .isLength({ min: 6, max: 255 })
    .withMessage("La contraseña debe tener almenos 6 caracteres"),
  check("pais")
    .exists()
    .notEmpty()
    .withMessage("El país es requerido")
    .isLength({ min: 1, max: 255 }),
  check("rol").exists().notEmpty().isLength({ min: 1, max: 255 }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const validateSignin = [
  check("correo")
    .exists()
    .notEmpty()
    .withMessage("El correo es requerido")
    .isEmail()
    .withMessage("Email inválido"),
  check("contrasena")
    .exists()
    .notEmpty()
    .withMessage("La contraseña es requerida")
    .isString()
    .isLength({ min: 6, max: 255 })
    .withMessage("La contraseña debe tener entre 6 y 255 caracteres"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
