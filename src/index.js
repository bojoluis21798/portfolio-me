import "./styles/main.scss";

const $ = require("jquery");
const emailjs = require("emailjs-com");

const config = require("../config/credentials.json");

$(function () {
  const breadcrumb = $("#breadcrumb");
  breadcrumb.hide();

  // Contact us send to my email
  $("#email-form").submit(function (event) {
    event.preventDefault();

    const user_name = $("#name");
    const user_email = $("#email");
    const message = $("#message");
    const form = [user_name, user_email, message];

    // SENDING STATUS
    form.forEach((f) => f.prop("disabled", true));

    const formData = {
      user_name: user_name.val(),
      user_email: user_email.val(),
      message: message.val(),
    };

    emailjs
      .send(config.service_id, config.template_id, formData, config.user_id)
      .then(() => {
        breadcrumb.text("Message Sent");
        $(this).trigger("reset");
      })
      .catch(() => {
        breadcrumb.toggleClass("breadcrumb--failed");
        breadcrumb.text(
          "Sorry, we could't send your message. Please try again"
        );
      })
      .finally(() => {
        breadcrumb.show();
        breadcrumb.toggleClass("breadcrumb--show");

        form.forEach((f) => f.prop("disabled", false));

        return new Promise((r) => setTimeout(r, 5000));
      })
      .then(() => {
        breadcrumb.toggleClass(
          ["breadcrumb--show", "breadcrumb--failed"],
          false
        );
      });
  });
});
