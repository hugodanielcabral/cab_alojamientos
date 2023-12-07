import { Router } from "express";
import {
  profile,
  signin,
  signup,
  signout,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/signout", signout);

router.get("/profile", isAuth, profile);

export default router;
