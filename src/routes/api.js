/**
 * Created by trungquandev.com's author on 12/10/2019.
 * src/routes/api.js
 */
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");

/**
 * Init all APIs on your application
 */
class APIs {
  init(app) {
    router.post("/login", AuthController.login);

    return app.use("/", router);
  }
}

module.exports = new APIs();
