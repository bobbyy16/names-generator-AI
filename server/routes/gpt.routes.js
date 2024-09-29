const express = require("express");

const { generateNames } = require("../controllers/gpt.controller.js");
const router = express.Router();

router.post("/generateNames", generateNames);

export default router;
