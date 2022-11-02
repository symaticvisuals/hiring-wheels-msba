const router = require("express").Router();
const VehicleSubCategory = require("../../controllers/VehicleSubCategories");

router
  .route("/")
  .post(async (req, res) => VehicleSubCategory.create(req, res))
  .get(async (req, res, next) => VehicleSubCategory.get(req, res, next));

router
  .route("/:id")
  .get(async (req, res) =>
    VehicleSubCategory.getVehicleSubCategoryById(req, res)
  )
  .delete(async (req, res) => VehicleSubCategory.remove(req, res))
  .put(async (req, res, next) => VehicleSubCategory.update(req, res, next));

module.exports = router;
