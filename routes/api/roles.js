const router = require('express').Router();
const Role = require("../../controllers/Role");

router
  .route("/")
  .post(async (req, res) => Role.create(req, res))
  .get(async (req, res, next) => Role.get(req, res, next));

router
  .route("/:id")
  .get(async (req, res) => Role.getRoleById(req, res))
  .delete(async (req, res) => Role.remove(req, res))
  .put(async (req, res, next) => Role.update(req, res, next));

module.exports = router;