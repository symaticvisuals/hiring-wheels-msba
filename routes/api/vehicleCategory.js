const router = require("express").Router();
const VehicleCategory = require("../../controllers/VehicleCategory");

router
  .route("/")
  .post(async (req, res) => VehicleCategory.create(req, res))
  .get(async (req, res, next) => VehicleCategory.get(req, res, next));

router
  .route("/:id")
  .get(async (req, res) => VehicleCategory.getVehicleCategoryById(req, res))
  .delete(async (req, res) => VehicleCategory.remove(req, res))
  .put(async (req, res, next) => VehicleCategory.update(req, res, next));

module.exports = router;
