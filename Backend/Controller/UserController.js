const createError = require("http-errors");
const User = require("../Model/UserModel");
var objectId = require("mongodb").ObjectId;

module.exports = {
  findUser: async (req, res, next) => {
    const { email } = req.body;
    try {
      const users = await User.findOne({ email });
      console.log(users);
    } catch (error) {
      next(error);
    }
  },
  createUser: async (req, res, next) => {
    try {
      console.log("createing user");
      const { email, name, password } = req.body.values;
      console.log(email, name, password);
      const doesExist = await User.findOne({ email });
      if (doesExist)
        return res.json({ user: false, msg: `${email} is already registered` });

      const user = new User({ email, name, password });
      const saveUser = await user.save();
      res.json({ saveUser, user: true, msg: "" });
    } catch (error) {
      next(error);
    }
  },
  loginUser: async (req, res, next) => {
    try {
      console.log("this is user login ");
      const { email, password } = req.body.values;
      const user = await User.findOne({ email });
      console.log(user);
      if (!user) throw createError.NotFound("user not registered");
      const isMatch = await user.isValidPassword(result.password);
      if (!isMatch)
        throw createError.Unauthorized("username/password not valid");

      const userId = user._id + "";
      const accessToken = await signAccessToken(user);

      res
        .cookie("userTocken", accessToken, { httpOnly: true })
        .json({ user, loggedIn: true });
    } catch (error) {
      if (error.isJoi)
        return next(createError.BadRequest("invalid username / password"));
      next(error);
    }
  },
};
