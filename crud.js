const Net = require('net');
var requestIp = require('request-ip');
var fs = require("fs")
const port = +process.argv[2];
const server = new Net.Server();

const functions = require("./functions.js");
const config = require("./config.js");
const crud = require("./crud.js");
const { exec } = require('child_process');

exports.login = function(user, pass, ip)
{
    var search = crud.get_USER(user, "user");
    if(!search || search === "") { return "No user found!"; }
    var split_info = search.split("','")
    if(user == split_info[0].replace("('", "")) {
        if(pass == split_info[4].replace("')", "")) {
            // if(ip == split_info[2]) {
                crud.logsession(user, ip);
                return functions.banner() + "\r\n                  Sucessfully logged in! Welcome: " + user + "\r\n";
            // } else { return "You're current IP: " + ip + " does not match the IP on the account! (" + split_info[2] + ")"; }
        } else { return "Username or password is incorrect!\r\n"; }
    } else { return "Username or password is incorrect!\r\n"; }
}

exports.getLineCOUNT = function(file) {
    return fs.readFileSync(file, "utf8").split('\n').length-1;
}

exports.get_USER = function(user, type)
{
    var searchfile = "";
    if(type==="user") {
        searchfile = "/root/db/users.sql";
    } else if(type==="current") {
        searchfile = "/root/db/currentsession.sql";
    }
    var result = "";
    let file = fs.readFileSync(searchfile, "utf8");
    let arr = file.split(/\r?\n/);
    arr.forEach((line, idx)=> {
        if(line.includes(user)){
        result = (line);
        }
    });
    return result;
}

exports.isSignedin = function (user) {
    var session_check = crud.get_USER(user, "current");
    if(session_check.includes(user) == true) 
    { 
        return true; 
    } else { 
        return false; 
    }
}

exports.logsession = function(user, ip) {
    fs.appendFile("/root/db/currentsession.sql", "('" + user + "','" + ip + "')\n", function (err) {
        if (err) throw err;
        
      });
}

exports.CLOSEsession = function(user) {
    var newlist = "";
    var sessionlist = fs.readFileSync("db/currentsession.sql", "utf8");
    var test = sessionlist.split('\n');
    if(test[0] = "" || test[1] == "") { }
    if(sessionlist.includes("\n") == true) { 
        var split_lines = sessionlist.split('\n');
        split_lines.forEach(element => {
            if(element.includes(user) == false)
            newlist = element + "\n";
        })
    }
    fs.writeFile("db/currentsession.sql", newlist, function (err) {
        if (err) throw err;

      });
}

//('Devious','premiumusr','73.61.12.58','200','1','skidbag!')
exports.get_maxTime = function(user)
{
    var userdata = crud.get_USER(user, "user");
    var split_info = userdata.split("','");
    return split_info[3];
}