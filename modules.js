/*
CommonJS Modules:
Widely used approach to JS modules
*/

// uses two packages from npm: ordinal and date-names

const ordinal = require("ordinal");
const {days, months} = require("date-names");

exports.formatDate = function(date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g,
                        tag => {
                            if (tag == "YYYY") return date.getFullYear();
                            if (tag == "M") return date.getMonth();
                            if (tag == "MMMM") return months[date.getMonth()];
                            if (tag == "D") return date.getDate();
                            if (tag == "Do") return ordinal(date.getDate());
                            if (tag == "dddd") return days[date.getDay()];
                        });
};

// use the module like this:

const {formatDate} = require("./format-date");
console.log(formatDate(new Date(2018, 7, 20), "dddd the Do"));


/*
Modern
ES modules
*/

import ordinal from "ordinal";
import {days, months} from "date-names";

export function formatDate(date, format) { /* .... */ }
