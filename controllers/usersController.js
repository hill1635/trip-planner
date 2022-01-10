const db = require("../models/user");

module.exports = {
    create: function(req, res) {
        db
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db
        .findById({ _id: req.params.id }, req.body)
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    login: function(req, res) {
        db
        .find({ email: req.params.email, password: req.params.password })
        .then(dbModel => {
            if (!dbModel) {
                res.status(400);
                alert("Email or password incorrect.");
                return;
            }
            req.session.save(() => {
                req.session.loggedIn = true;
                res
                .status(200)
                .json({user: req.params.email})
            });
        })
        .catch(err => res.status(500).json(err));
    }
};