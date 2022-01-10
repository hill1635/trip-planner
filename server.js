const express = require("express");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const routes = require("./routes");
const session = require("express-session");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sess = {
    secret: "the secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ 
        mongoURL: "mongodb://localhost/trip-planner",
        ttl: 2 * 60 * 60
    })
};

app.use(session(sess));
console.log("ttl: ", sess.store.ttl);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trip-planner");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});