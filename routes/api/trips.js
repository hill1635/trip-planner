const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

router
    .route("/")
    .post(tripsController.create);

router
    .route("/:id")
    .delete(tripsController.remove);

router
    .route("/:id")
    .put(tripsController.update);

module.exports = router;