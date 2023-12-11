import { check } from "express-validator";
import { validateResult } from "../libs/validationResult.js";

export const validateCreate = [
  check("nombre").exists().notEmpty(),
  check("descripcion").exists().notEmpty(),
  check("provincia").exists().notEmpty().isLength({ min: 1, max: 255 }),
  check("localidad").exists().notEmpty().isLength({ min: 1, max: 255 }),
  check("categoria").exists().notEmpty().isLength({ min: 1, max: 255 }),
  check("precio")
    .exists()
    .isNumeric()
    .notEmpty()
    .custom((value) => {
      if (value < 10 || value > 1000) {
        throw new Error("El precio debe estar entre 10 y 1000");
      }
      return true;
    }),
  check("cant_habitaciones")
    .exists()
    .notEmpty()
    .isNumeric()
    .custom((value) => value >= 0)
    .withMessage("La cantidad de habitaciones no puede ser negativa"),
  check("cant_camas")
    .exists()
    .notEmpty()
    .isNumeric()
    .custom((value) => value >= 0)
    .withMessage("La cantidad de camas no puede ser negativa"),
  check("cant_banios")
    .exists()
    .notEmpty()
    .isNumeric()
    .custom((value) => value >= 0)
    .withMessage("La cantidad de baños no puede ser negativa"),
  ...createImageValidators(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const validateUpdate = [
  ...validateCreate.slice(0, -1),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

function createImageValidators() {
  return ["img_portada", "img_habitacion", "img_banio", "img_comedor"].map(
    (field) =>
      check(field)
        .exists()
        .notEmpty()
        .custom((value) => {
          if (
            !value.startsWith("https://") ||
            (!value.endsWith(".jpg") &&
              !value.endsWith(".png") &&
              !value.endsWith(".jpeg"))
          ) {
            throw new Error("La imagen debe ser una URL con .jpg,.png o .jpeg");
          }
          return true;
        })
  );
}
