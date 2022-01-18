const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
  .route("/")
  .post(usersController.create);

router
  .route("/:id")
  .delete(usersController.remove);

router
  .route("/login")
  .post(usersController.login);

router
  .route("/logout")
  .post(userController.logout);

module.exports = router;
