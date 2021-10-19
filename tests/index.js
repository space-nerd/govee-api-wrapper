const goveeApiWrapper = require("../index");
const express = require("express");

const app = express();

const Lamp = new goveeApiWrapper({
  apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
  mac: "1d:e7:7c:a6:b0:13:b8:e9",
  model: "H6003"
});

const state = Lamp.getColorColorTemp();
console.log(state);

app.get("/", (res) => {
  res.send(state);
});

app.listen(80);
