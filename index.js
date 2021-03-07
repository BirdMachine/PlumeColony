#!/usr/bin/env node
var figlet = require('figlet');
const os = require("os");
var hostname = os.hostname();
const gradient = require('gradient-string');
var colonyColor = require('./colonyColors');
var myCol = colonyColor.mine


//console.log(figlet.fontsSync());
var styleName = figlet.text(hostname, {
    font: 'Stampate',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
	console.log(gradient(myCol)(data));
});




