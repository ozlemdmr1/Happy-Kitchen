import express from "express";
//import hk from "express";
import { createConnection } from "mysql";

import adminRoutes from "../backend/routes/admin.js";
import routes from "../backend/routes/index.js";

import database from "./database.js";
import bodyParser from "body-parser";
import path from "path";
import Product from "./models/product.js";
import bh from "./database.js";

//import routes from "./routes/index";
// routes();

// import routes from "./routes";

bh();

const hk = express();

hk.use(bodyParser.urlencoded({ extended: false }));
// hk.use(express.static(path.join(__dirname, "public")));
hk.use(routes);

hk.use("/admin.js", adminRoutes);

await Product.createTable();

// const add_product = new Product(
//   "Kebap",
//   50,
//   "Ana Yemek",
//   "https://picsum.photos/200/300",
//   "Bu bir yemek"
// );

//ilişkilendirme
// Product.belongsTo(Category, { foreignkey: { allowNull: false } });
// Category.hasMany(Product);

//category

hk.listen(3000, () => console.log("listen on port 3000"));

export default hk;
