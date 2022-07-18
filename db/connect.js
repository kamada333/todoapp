const mongoos = require("mongoose");

const connectDB = (url) => {
  return mongoos
  .connect(url)
  .then(() => console.log("データベースと接続中・・・"))
  .catch((err) => console.log(err));
};

module.exports = connectDB;