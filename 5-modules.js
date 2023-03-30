// Modules

const { john, peter } = require("./1-names");
const sayHi = require("./2-utils");
const data = require("./3-alternative-flavour");
require("./4-value");

sayHi(john);
sayHi(peter);
sayHi("susan");
