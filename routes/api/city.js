const router = require("express").Router();
const City = require("../../controllers/City");

router
  .route("/")
  .post(async (req, res, next) => City.create(req, res, next))
  .get(async (req, res, next) => City.get(req, res, next));

router
  .route("/:id")
  .get(async (req, res) => City.getCityById(req, res))
  .delete(async (req, res) => City.remove(req, res))
  .put(async (req, res, next) => City.update(req, res, next));

module.exports = router;
