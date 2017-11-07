var header = require("../components/header/header.html");
var footer = require("../components/footer/footer.html");

module.exports = function () {
    $(".container").prepend(header);
    $(".container").append(footer);
};