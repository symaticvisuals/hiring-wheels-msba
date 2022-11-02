const { Router } = require("express");

const router = Router();
router.use("/roles", require("./roles"));
router.use("/city", require("./city"));
router.use("/fuelType", require("./fuelType"));
router.use("/locations", require("./locations"));
router.use("/vehicleCategory", require("./vehicleCategory"));
router.use("/vehicleSubCategory", require("./vehicleSubCategory"));
router.use("/vehicle", require("./vehicle"));
module.exports = router;
