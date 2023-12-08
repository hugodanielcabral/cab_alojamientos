import { z } from "zod";

export const signupSchema = z.object({
  nombre: z
    .string({
      required_error: "El nombre es requerido",
      invalid_type_error: "El nombre debe ser un string",
    })
    .min(1, {
      message: "El nombre debe tener al menos 1 caracter",
    })
    .max(255, {
      message: "El nombre no puede tener más de 255 caracteres",
    }),
  correo: z
    .string({
      required_error: "El correo es requerido",
      invalid_type_error: "El correo debe ser un string",
    })
    .email({ message: "El correo no es válido" }),
  contrasena: z
    .string({
      required_error: "La contraseña es requerida",
      invalid_type_error: "La contraseña debe ser un string",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    })
    .max(255, {
      message: "La contraseña no puede tener más de 255 caracteres",
    }),
  pais: z
    .string({
      required_error: "El país es requerido",
      invalid_type_error: "El país debe ser un string",
    })
    .min(1, {
      message: "El país debe tener al menos 1 caracter",
    })
    .max(255, {
      message: "El país no puede tener más de 255 caracteres",
    }),
  rol: z
    .string({
      required_error: "El rol es requerido",
      invalid_type_error: "El rol debe ser un string",
    })
    .min(1, {
      message: "El rol debe tener al menos 1 caracter",
    })
    .max(255, {
      message: "El rol no puede tener más de 255 caracteres",
    }),
});

export const signinSchema = z.object({
  correo: z
    .string({
      required_error: "El correo es requerido",
      invalid_type_error: "El correo debe ser un string",
    })
    .email({ message: "El correo no es válido" }),
  contrasena: z
    .string({
      required_error: "La contraseña es requerida",
      invalid_type_error: "La contraseña debe ser un string",
    })
    .min(6)
    .max(255),
});
