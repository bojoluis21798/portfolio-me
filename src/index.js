import "./styles/main.scss";

const template = require("./main.ejs");

const partials = require("./partials");

const render = template(partials);
document.getElementById("app").innerHTML = render;
