import { Router } from "express";
import { MembersController } from "../controllers/members.controller.js";

const router = Router();

router.post("/", MembersController.create);

router.get("/", MembersController.findAll);

router.get("/:id", MembersController.findOne);

router.put("/:id", MembersController.update);

router.delete("/:id", MembersController.delete);

export default router;
