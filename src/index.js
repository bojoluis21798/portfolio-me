import "./styles/main.scss";

const $ = require("jquery");

// Contact us send to my email
$("#email-form").submit(function (event) {
  event.preventDefault();

  const formData = $(this).serializeArray();

  const sendButton = $("#send");
  const form = [$("#name"), $("#email"), $("#message"), sendButton];

  // SENDING STATUS
  form.forEach((f) => f.prop("disabled", true));
  sendButton.toggleClass("sending");
  sendButton.val("Sending");

  new Promise((r) => setTimeout(r, 1000))
    .then(() => {
      // SENT STATUS
      form.forEach((f) => f.prop("disabled", false));
      sendButton.toggleClass("sending");
      sendButton.toggleClass("sent");
      sendButton.val("Sent");

      $(this).trigger("reset");
    })
    .then(() => new Promise((r) => setTimeout(r, 3000)))
    .then(() => {
      // RESET STATUS
      sendButton.val("Send");
      sendButton.toggleClass("sent");
    });
});
