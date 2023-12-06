import { Router } from "express";

const router = Router();

router.post("/signin", (req, res) => {
  res.send("Signin");
});

router.post("/signup", (req, res) => {
  res.send("Signup");
});

router.post("/signout", (req, res) => {
  res.send("Signout");
});

router.get("/profile", (req, res) => {
  res.send("Perfil de usuario");
});

export default router;
