require("dotenv").config();
const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

const transporter = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.set("port", process.env.PORT || 8080);

app.post("/api/send-mail", async function (req, res) {
  try {
    const { user_name, user_email, message } = req.body;

    const info = await transporter.sendMail({
      from: "portfolio.message@hotmail.com",
      to: "portfolio.message@hotmail.com",
      subject: `Message from ${user_name}`,
      text: `
        ${message}
          \n\n\n\n
        Email: ${user_email}     
      `,
    });

    res.status(200).send("Email Sent");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

const server = app.listen(app.get("port"), function () {
  console.log("listening on port ", server.address().port);
});
