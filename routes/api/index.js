const router = require("express").Router();
const donutRoutes = require("./donuts");

// Donut routes
router.use("/donuts", donutRoutes);

module.exports = router;