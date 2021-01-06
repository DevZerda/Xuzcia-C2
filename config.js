const Net = require('net');
var requestIp = require('request-ip');
const port = +process.argv[2];
const server = new Net.Server();

const functions = require("./functions.js");
const config = require("./config.js");
const crud = require("./crud.js");

exports.cmd = "";
exports.cmd_argv = [];
exports.hostname = "\x1b[31mproject\x1b[36m@\x1b[31mXuzcia\x1b[36m#\x1b[31m~ \x1b[36m";

exports.RED = "\x1b[31m";
exports.PURPLE = "\x1b[95m";
exports.CYAN = "\x1b[36m";
exports.BLACK = "\x1b[30m";
exports.GREEN = "\x1b[92m";
exports.YELLOW = "\x1b[93m";
exports.RESET = "\x1b[39m";
exports.clear = "\033[2J\033[1;1H";

exports.currentAPIs = "1";

exports.BOOTERAPI1 = "";
exports.BOOTERAPI2 = "";
exports.BOOTERAPI3 = "";
exports.BOOTERAPI4 = "";
exports.BOOTERAPI5 = "";

exports.currentUSER = function(ip) {
    var data = crud.get_USER(ip, "current");
    var split = data.split("\n");
    split.forEach(element => {
        if(element.includes(ip) == true) {
            var split_info = element.split("','");
            return split_info[0].replace("('", "");
        }
    });
}