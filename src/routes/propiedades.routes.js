import { Router } from "express";

const router = Router();

router.get("/propiedades", (req, res) => {
  res.send("Obteniendo propiedades");
});

router.get("/propiedades/:id", (req, res) => {
  res.send("Obteniendo propiedad");
});

router.post("/propiedades", (req, res) => {
  res.send("Creando propiedad!");
});

router.put("/propiedades/:id", (req, res) => {
  res.send("Actualizando propiedad!");
});

router.delete("/propiedades/:id", (req, res) => {
  res.send("Eliminando propiedad!");
});

export default router;
