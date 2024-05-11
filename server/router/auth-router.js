const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");

router.route("/").get(authControllers.home);
router.route("/register").get(authControllers.register);
router.route("/login").get(authControllers.login);

router.route

module.exports = router;