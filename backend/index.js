require("dotenv").config();

const express = require("express");
const path = require("path");
const accessCrossOrigin = require("./middleware/accessCrossOrigin");

const PORT = global.process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(accessCrossOrigin);

app.use("/static", express.static(path.join(global.process.cwd(), "public")));

const start = async () => {
  try {
    app.listen(PORT, () => {
      global.console.log(`Server has been started`);
    });
  } catch (err) {
    global.console.log(err);
  }
};

start();
