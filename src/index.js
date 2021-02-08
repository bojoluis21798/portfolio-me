import "./styles/main.scss";

const $ = require("jquery");
//const nodemailer = require("nodemailer");

$("#email-form").submit(function (event) {
  event.preventDefault();
  const formData = $("#email-form").serializeArray();
});
