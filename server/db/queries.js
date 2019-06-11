const connection = require("./connection");

module.exports = {
  getAll() {
    //return connection with product name
    //same thing as select * from product
    return connection("product");
  }
};
