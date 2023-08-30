import { Router } from "express";

import { getProducts, postAddProduct } from "../controllers/product/admin.js";

// router.get('/', (req, res) => {
//     res.end('hey naber?');
// });
const router = Router();
router.get("/", getProducts);

router.post("/add", postAddProduct);

// router.get("/add-product", adminController.getAddProduct);

// router.post("/add-product", adminController.postAddProduct);

export default router;
