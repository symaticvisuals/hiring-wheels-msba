const router = require("express").Router();
const Location = require("../../controllers/Location");

router
  .route("/")
  .post(async (req, res, next) => Location.create(req, res, next))
  .get(async (req, res, next) => Location.get(req, res, next));

router
  .route("/:id")
  .get(async (req, res) => Location.getLocationById(req, res))
  .delete(async (req, res) => Location.remove(req, res))
  .put(async (req, res, next) => Location.update(req, res, next));

module.exports = router;
