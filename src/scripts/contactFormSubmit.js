import $ from "jquery";
import emailjs from "emailjs-com";
import config from "../../config/credentials.json";

function contactFormSubmit(event) {
  event.preventDefault();

  const breadcrumb = $("#breadcrumb");
  const user_name = $("#name");
  const user_email = $("#email");
  const message = $("#message");
  const submitButton = $("#send");
  const form = [user_name, user_email, message, submitButton];

  // SENDING STATUS
  form.forEach((f) => f.prop("disabled", true));
  submitButton.toggleClass("send--disabled");

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
      breadcrumb.text("Sorry, we could't send your message. Please try again");
    })
    .finally(() => {
      breadcrumb.show();
      breadcrumb.toggleClass("breadcrumb--show");

      form.forEach((f) => f.prop("disabled", false));
      submitButton.toggleClass("send--disabled");

      return new Promise((r) => setTimeout(r, 5000));
    })
    .then(() => {
      breadcrumb.toggleClass("breadcrumb--show", false);

      // remove class after animation
      setTimeout(
        () => breadcrumb.toggleClass("breadcrumb--failed", false),
        500
      );
    });
}

export default contactFormSubmit;
