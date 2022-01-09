const mongoose = require("mongoose");
const localhostlink = "mongodb://localhost:27017/students-api";
const obj = {
  // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
};
mongoose
  .connect(localhostlink, obj)
  .then(() => {
    console.log("connection is Successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
