const router = require("express").Router();
const donutsController = require("../../controllers/donutsController");

// Matches with "/api/donuts"
router.route("/")
  .get(donutsController.findAll)
  .post(donutsController.create);

// Matches with "/api/donuts/:id"
router.route("/:id")
  .get(donutsController.findById)
  .put(donutsController.update)
  .delete(donutsController.remove);

module.exports = router;