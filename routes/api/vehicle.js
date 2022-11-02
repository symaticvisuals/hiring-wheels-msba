const router = require("express").Router();
const Vehicle = require("../../controllers/Vehicle");

router
  .route("/")
  .post(async (req, res) => Vehicle.create(req, res))
  .get(async (req, res, next) => Vehicle.get(req, res, next));

router
  .route("/:id")
  .get(async (req, res) => Vehicle.getVehicleById(req, res))
  .delete(async (req, res) => Vehicle.remove(req, res))
  .put(async (req, res, next) => Vehicle.update(req, res, next));

module.exports = router;
