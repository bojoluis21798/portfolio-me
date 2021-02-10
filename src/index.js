import $ from "jquery";
import "./styles/main.scss";
import contactFormSubmit from "./scripts/contactFormSubmit";
import smoothScroll from "./scripts/smoothScroll";

$(function () {
  const breadcrumb = $("#breadcrumb");
  breadcrumb.hide();

  $("#email-form").submit(contactFormSubmit);
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(smoothScroll);
});
