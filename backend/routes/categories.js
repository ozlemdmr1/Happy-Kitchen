import { Router } from "express";
const router = Router();

import { getProductByCategoryId } from "../controllers/category_controller.js";

router.get("/categories/:categoryid", getProductByCategoryId);

export default router;
