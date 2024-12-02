const express = require("express");
const designUploadController = require("../controller/designUploadController");
const { upload } = require("../config/multerConfig");
const routes = express.Router();

routes.post(
  "/create-category/:category",
  designUploadController.createCategory
);

routes.post(
  "/add-designs/:category",
  upload.single("file"),
  designUploadController.addFiles
);

module.exports = routes;
