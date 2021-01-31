import "./styles/main.scss";

const template = require("./main.ejs");
const header = require("./partials/header.ejs");

const render = template({ header });
document.getElementById("app").innerHTML = render;
