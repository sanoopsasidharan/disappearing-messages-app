const createError = require("http-errors");
const MsgAndLink = require("../Model/Msg&LinkModel");
var objectId = require("mongodb").ObjectId;
const short = require("short-uuid");

module.exports = {
  addData: async (req, res, next) => {
    try {
      console.log(req.payload.id);

      console.log(req.body);
      const { time, value, valuetype } = req.body;
      const unique = short.generate();
      const isActive = true;
      console.log(unique, time, valuetype, isActive);
      const addData = new MsgAndLink({
        time,
        value,
        valuetype,
        unique,
        isActive,
        userId: objectId(req.payload.id),
      });
      console.log("....");
      const saveData = await addData.save();
      console.log(saveData);
      res.status(200).json(saveData);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  //   getting data
  gettingData: async (req, res, next) => {
    try {
      console.log(req.params.id);
      const result = await MsgAndLink.findOne({ unique: req.params.id });
      res.json(result);
      if (!result) throw createError.NotFound("data not found");
    } catch (error) {
      next(error);
    }
  },
  // find message and link
  MsgAndLink: async (req, res, next) => {
    try {
      console.log(req.payload.id);
      const { selectValue, type } = req.body;
      const result = await MsgAndLink.find({
        isActive: selectValue,
        valuetype: type,
        userId: objectId(req.payload.id),
      }).sort({ _id: -1 });
      // console.log(result);
      // const sample = result[0].time;
      // console.log(sample);
      // function convertHMS(value) {
      //   const sec = parseInt(value, 10);
      //   let day = Math.floor(sec / (3600 * 24));
      //   let hours = Math.floor(sec / 3600);
      //   let minutes = Math.floor((sec - hours * 3600) / 60);
      //   let seconds = sec - hours * 3600 - minutes * 60;
      //   if (day < 10) {
      //     day = "0" + day;
      //   }
      //   if (hours < 10) {
      //     hours = "0" + hours;
      //   }
      //   if (minutes < 10) {
      //     minutes = "0" + minutes;
      //   }
      //   if (seconds < 10) {
      //     seconds = "0" + seconds;
      //   }

      //   return day + ":" + hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
      // }

      // console.log(convertHMS(sample));

      // function secondsToDhms(seconds) {
      //   seconds = Number(seconds);
      //   var d = Math.floor(seconds / (3600 * 24));
      //   var h = Math.floor((seconds % (3600 * 24)) / 3600);
      //   var m = Math.floor((seconds % 3600) / 60);
      //   var s = Math.floor(seconds % 60);

      //   var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
      //   var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      //   var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
      //   var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
      //   return dDisplay + hDisplay + mDisplay + sDisplay;
      // }
      // console.log(secondsToDhms(sample));

      res.json(result);
    } catch (error) {
      next(error);
    }
  },
};
