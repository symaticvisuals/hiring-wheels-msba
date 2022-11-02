const router = require("express").Router();
const FuelType = require("../../controllers/FuelType");

router
  .route("/")
  .post(async (req, res, next) => FuelType.create(req, res, next))
  .get(async (req, res, next) => FuelType.get(req, res, next));

router
  .route("/:id")
  .get(async (req, res) => FuelType.getFuelTypeById(req, res))
  .delete(async (req, res) => FuelType.remove(req, res))
  .put(async (req, res, next) => FuelType.update(req, res, next));

module.exports = router;
