import { Router } from "express";
import { SeedController } from "../controllers/seed.controller.js";

const router = Router();

router.post("/", SeedController.seed);

export default router;
