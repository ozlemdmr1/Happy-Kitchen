import { log } from "console";
import bh from "../database.js";

class Product {
  constructor(product_name, price, type, imageUrl, description) {
    this.product_name = product_name;
    this.price = price;
    this.type = type;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  static async createTable() {
    return bh().query(
      " CREATE TABLE IF NOT EXISTS product (id int not null auto_increment PRIMARY KEY, product_name VARCHAR(255),price int ,product_type VARCHAR(255),imageUrl VARCHAR(255),description VARCHAR(255));"
    );
  }
  static async saveProduct(product) {
    return bh().query(
      "INSERT INTO product(product_name, price,product_type, imageUrl, description) VALUES (?,?,?,?,?)",
      [
        product.product_name,
        product.price,
        product.product_type,
        product.imageUrl,
        product.description,
      ]
    );
  }
  static async findAll() {
    return bh().query("SELECT * FROM product");
  }
  static getById(id) {
    return bh().query("SELECT * FROM product WHERE product.id=?", [id]);
  }
  static getProductsByCategoryId(categoryid) {}
  static Update(product) {
    return bh().query(
      "UPDATE product SET product.product_name=?,product.price=?,product.product_type=?,product.imageUrl=?,product.description=? WHERE product.id=?",
      [
        product.product_name,
        product.price,
        product.type,
        product.imageUrl,
        product.description,
        product.id,
      ]
    );
  }
  static DeleteById(id) {
    return bh().query("DELETE FROM product WHERE id=?", [id]);
  }
}

export default Product;
