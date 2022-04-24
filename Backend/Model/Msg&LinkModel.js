const mongoose = require("mongoose");
const schema = mongoose.Schema;
const MsgAndLinkSchema = new schema({
  time: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  valuetype: {
    type: String,
    required: true,
  },
  unique: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  userId: {},
});

const MsgAndLink = mongoose.model("MsgAndLink", MsgAndLinkSchema);

module.exports = MsgAndLink;
