const express = require("express");
const Category = require("../models/category.model");

const routes = express.Router();

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}, "categoryName -_id");

    res.status(201).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCategoriesDetails = async (req, res) => {
  try {
    const categories = await Category.find({});

    res.status(201).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
};

routes.get("/get-categories", getCategories);

routes.get("/get-categories-details", getCategoriesDetails);

module.exports = routes;
