import { check } from "express-validator";
import { validateResult } from "../libs/validationResult.js";

export const validateCreate = [
  check("nombre").exists().notEmpty().withMessage("El nombre es requerido"),
  check("descripcion")
    .exists()
    .notEmpty()
    .withMessage("La descripción es requerida"),
  check("provincia")
    .exists()
    .notEmpty()
    .withMessage("La provincia es requerida")
    .isLength({ min: 1, max: 255 }),
  check("localidad")
    .exists()
    .notEmpty()
    .withMessage("La localidad es requerida")
    .isLength({ min: 1, max: 255 }),
  check("categoria")
    .exists()
    .notEmpty()
    .withMessage("La categoria es requerida")
    .isLength({ min: 1, max: 255 }),
  check("precio")
    .exists()
    .notEmpty()
    .withMessage("El precio es requerido")
    .isNumeric()
    .custom((value) => {
      if (value < 10 || value > 1000) {
        throw new Error("El precio debe estar entre 10 y 1000");
      }
      return true;
    }),
  check("cant_habitaciones")
    .exists()
    .notEmpty()
    .withMessage("La cantidad de habitaciones es requerida")
    .isNumeric()
    .custom((value) => value >= 0)
    .withMessage("La cantidad de habitaciones no puede ser negativa"),
  check("cant_camas")
    .exists()
    .notEmpty()
    .withMessage("La cantidad de camas es requerida")
    .isNumeric()
    .custom((value) => value >= 0)
    .withMessage("La cantidad de camas no puede ser negativa"),
  check("cant_banios")
    .exists()
    .notEmpty()
    .withMessage("La cantidad de baños es requerida")
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
        .withMessage(`La imagen ${field} es requerida`)
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
