const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
  .route("/")
  .post(usersController.create);

router
  .route("/:id")
  .delete(usersController.remove);

module.exports = router;
