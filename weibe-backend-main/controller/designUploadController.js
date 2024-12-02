const Category = require("../models/category.model");
const Design = require("../models/design.model");
const azure = require("../config/azureStorageConfig");
const { v4: uuidv4 } = require("uuid");

const createCategory = async (req, res) => {
  const categoryName = req.params.category;
  try {
    const newCategory = await Category.create({ categoryName });

    res.status(201).json({
      message: "Category created successfully",
      status: true,
      category: newCategory,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({
      message: "Error creating category",
      status: false,
      error: error.message,
    });
  }
};

const addFiles = async (req, res) => {
  const file = req.file;
  const categoryName = req.params.category;

  try {
    const fileName = `${uuidv4()}?${categoryName}?${file.originalname}`;

    const fileUrl = await azure.azureStore(fileName, file.buffer);

    await Design.create({
      designUrl: fileUrl,
      category: categoryName,
    });

    await Category.findOneAndUpdate(
      { categoryName },
      { $inc: { noOfDesigns: 1 } },
      { new: true }
    );

    res.status(201).json({
      message: "Success",
      status: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  addFiles,
  createCategory,
};
