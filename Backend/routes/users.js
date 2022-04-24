var express = require("express");
const { verifyToken } = require("../Config/jwt_helper");
var router = express.Router();
const { createUser, loginUser } = require("../Controller/UserController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a sanoop");
});

// register user
// @body value
// @return user,meg
router.post("/register_user", createUser);

// login user
// @body value
// @return user,meg
router.post("/login_user", loginUser);

module.exports = router;
