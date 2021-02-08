import "./styles/main.scss";

const $ = require("jquery");
//const nodemailer = require("nodemailer");

const emailForm = $("#email-form");

emailForm.submit(function (event) {
  event.preventDefault();

  const formData = emailForm.serializeArray();
  emailForm.trigger("reset");
});
