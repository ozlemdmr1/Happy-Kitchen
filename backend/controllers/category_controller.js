// const Category = require("../model/category");
// import Category from "../models/category.js";

export function getProductByCategoryId(req, res, next) {
  const categoryid = req.params.categoryid;
  const model = [];

  Category.findAll()
    .then((categories) => {
      model.categories = categories;
      const category = categories.find((i) => i.id == categoryid);
      return category.getProducts();
    })
    .then((products) => {
      //res.render("shop/products")=> kısmındaki shop/products
      //html sayfasını getiriyor yani kısaca değişicek
      res.render("shop/products", {
        title: "Products",
        products: products,
        categories: model.categories,
        selectedCategory: categoryid,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
}
