const db = require("../models/trip");

module.exports = {
    create: function (req, res) {
        db.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.findById({ _id: req.params.id }, req.body)
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.findByIdAndUpdate(req.body._id, req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
};