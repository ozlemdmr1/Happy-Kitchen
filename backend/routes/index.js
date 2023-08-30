import { Router } from "express";

const router = Router();

import admin from "./admin.js";
import categories from "./categories.js";

router.get("/", (req, res) => {
  res.end("hey");
});

router.use("/products", admin);

export default router;
