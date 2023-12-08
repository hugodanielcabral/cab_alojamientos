import { z } from "zod";

export const createPropiedadSchema = z.object({
  nombre: z
    .string({
      required_error: "El nombre es requerido",
      invalid_type_error: "El nombre debe ser un string",
    })
    .min(1)
    .max(255),
  descripcion: z
    .string({
      required_error: "La descripción es requerida",
      invalid_type_error: "La descripción debe ser un string",
    })
    .min(1)
    .max(255),
  ubicacion: z
    .string({
      required_error: "La ubicación es requerida",
      invalid_type_error: "La ubicación debe ser un string",
    })
    .min(1)
    .max(255),
  precio: z
    .number({
      required_error: "El precio es requerido",
      invalid_type_error: "El precio debe ser un number",
    })
    .min(0),
});

export const updatePropiedadSchema = z.object({
  nombre: z
    .string({
      required_error: "El nombre es requerido",
      invalid_type_error: "El nombre debe ser un string",
    })
    .min(1)
    .max(255),
  descripcion: z
    .string({
      required_error: "La descripción es requerida",
      invalid_type_error: "La descripción debe ser un string",
    })
    .min(1)
    .max(255),
  ubicacion: z
    .string({
      required_error: "La ubicación es requerida",
      invalid_type_error: "La ubicación debe ser un string",
    })
    .min(1)
    .max(255),
  precio: z
    .number({
      required_error: "El precio es requerido",
      invalid_type_error: "El precio debe ser un number",
    })
    .min(0),
});
