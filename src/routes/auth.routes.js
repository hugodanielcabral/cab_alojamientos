import { Router } from "express";
import {
  profile,
  signin,
  signup,
  signout,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import {
  validateSignup,
  validateSignin,
} from "../validators/auth.validation.js";
const router = Router();

router.post("/signin", validateSignin, signin);

router.post("/signup", validateSignup, signup);

router.post("/signout", signout);

router.get("/profile", isAuth, profile);

export default router;
