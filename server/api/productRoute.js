const express = require("express");

const router = express.Router();

const queries = require("../db/queries");

//all the routes are prefixed with /api/v1/products
router.get("/", (req, res) => {
  queries.getAll().then(products => {
    res.json(products);
  });
});

router.get("/:id", (req, res, next) => {
  //validate the id by checking if it is a number
  if (!isNaN(req.params.id)) {
    //find it in the db
    // res.json("hello");
    queries.getOne(req.params.id).then(product => {
      if (product) {
        res.json(product);
      } else {
        next(); //next without error code cals the next available error code
      }
    });
  } else {
    const error = new Error("Invalid ID");
    //SEND IT TO THE ERRO HANDLER
    next(error);
  }
});

module.exports = router;
