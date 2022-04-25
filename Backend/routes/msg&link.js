var express = require("express");
const { verifyToken } = require("../Config/jwt_helper");
var router = express.Router();
const {
  addData,
  gettingData,
  MsgAndLink,
} = require("../Controller/Msg&LinkController");

router.post("/addData", verifyToken, addData);

// @getting Data
// @params id
// retrun
router.get("/gettingData/:id", verifyToken, gettingData);

router.post("/geting_MsgAndLink", verifyToken, MsgAndLink);

router.post("/userIsLoggedIn", verifyToken, (req, res, next) => {
  const payload = req.payload;
  res.json({ user: true, payload });
});

module.exports = router;
