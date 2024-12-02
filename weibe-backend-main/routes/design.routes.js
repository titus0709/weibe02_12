const express = require("express");
const Design = require("../models/design.model");

const routes = express.Router();

const getDesignsByCategories = async (req, res) => {
  const categoryName = req.params.categoryName;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  try {
    const designsCount = (await Design.find({ category: categoryName })).length;
    const totalPages = Math.ceil(designsCount / limit);

    const remainingPages = totalPages - page;
    const designs = await Design.find({ category: categoryName })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(201).json({
      designs,
      remainingPages,
      totalPages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

routes.get("/design/:categoryName", getDesignsByCategories);

module.exports = routes;
