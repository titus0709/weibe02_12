const express = require("express");
const Price = require("../models/price.model");

const routes = express.Router();

const getPrice = async (req, res) => {
  try {
    const prices = await Price.find({});

    res.status(201).json(prices);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addPrice = async (req, res) => {
  const designCount = req.body.designCount;
  const price = req.body.price;
  try {
    await Price.updateOne(
      { designCount },
      {
        designCount,
        price,
      }
    );

    res.status(201).json({
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      error,
      status: false,
    });
  }
};

routes.get("/get-price", getPrice);

routes.post("/add-price", addPrice);

module.exports = routes;
