const connection = require("./connection");

module.exports = {
  getAll(id) {
    //return connection with product name
    //same thing as select * from product
    return connection("product");
  },
  getOne(id) {
    return connection("product")
      .where("id", id)
      .first();
  }
};
