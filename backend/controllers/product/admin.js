import Product from "../../models/product.js"; // değişecek
// import { findAll as _findAll } from "../../models/category.js";
import { result } from "underscore";

import pkg from "boom";
const { badRequest } = pkg;

//import Schema from "./validations.js";

export async function getProducts(req, res, next) {
  try {
    const product = await Product.findAll();

    res.json(product);
  } catch (e) {
    next(e);
  }
}

export function getAddProduct(req, res, next) {
  _findAll()
    .then((categories) => {
      res.render("admin/html", {
        title: "New Product",
        path: "/admin/html",
        categories: categories,
      });
    })
    .catch((err) => console.log(err));
}

export async function postAddProduct(req, res, next) {
  const input = req.body;
  const { error } = validate(input);

  if (error) {
    return next(badRequest(error.details[0].message));
  }

  try {
    input.imageUrl = JSON.parse(input.imageUrl);

    const product = new Product.saveProduct(input);
    const savedData = await product.save();

    res.json(savedData);
  } catch (e) {
    next(e);
  }
}

export function getEditProduct(req, res, next) {
  findByPk(req.params.productid)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      _findAll()
        .then((categories) => {
          res.render("admin/html", {
            title: "Edit Product",
            path: "/admin/products",
            product: product,
            categories: categories,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

export function postEditProduct(req, res, next) {
  const id = req.body.id;
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;
  const categoryid = req.body.categoryid;
  const product_status = res.body.product_status;

  findByPk(id)
    .then((product) => {
      product.name = name;
      product.price = price;
      product.description = description;
      product.categoryId = categoryid;
      product.product_status = product_status;
      return product.save();
    })
    .then((result) => {
      console.log("updated");
      res.redirect("/admin/product?action=edit");
    })
    .catch((err) => console.log(err));
}

export function postDeleteProduct(req, res, next) {
  const id = req.body.productid;
  findByPk(id)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log("product has been deleted");
      res.redirect("/admin/product?action=delete");
    })
    .catch((err) => console.log(err));
}
