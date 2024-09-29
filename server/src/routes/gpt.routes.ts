import { Router } from "express";

import { generateNames } from "../controllers/gpt.controller";

const router = Router();

router.post("/generateNames", generateNames);

export default router;
