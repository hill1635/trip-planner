const db = require("../models/trip");

module.exports = {
    create: function (req, res) {
        db.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },

};