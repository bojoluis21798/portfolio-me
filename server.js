const path = require("path");
const express = require("express");
const emailjs = require("emailjs-com");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.set("port", process.env.PORT || 8080);

app.post("/api/send-mail", function (req, res) {});

const server = app.listen(app.get("port"), function () {
  console.log("listening on port ", server.address().port);
});
