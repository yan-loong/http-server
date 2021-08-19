#! /usr/bin/env node

const arguments = require("../lib/arguments.js");
const server = require("../lib/server");
const fileSystem = require("../lib/utils/file-system");

arguments.parseArgument();

fileSystem.findEntryPoint()
    .then(entryPoint => {
        server.start();
    })
    .catch(err => {
        console.error(err)
        // process.exit(1);
    })

