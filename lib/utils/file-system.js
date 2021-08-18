const fs = require('fs');
const fsp = require('fs/promises');
const path = require("path");
const config = require("../config");

const currentWorkDirectory = process.cwd()

function createReadStream(url) {
    const filePath = path.join(currentWorkDirectory, url);
    const readStream = fs.createReadStream(filePath);

    return readStream;
}

function findEntryPoint() {
    return new Promise(async (resolve, reject) => {
        try {
            const files = await fsp.readdir(currentWorkDirectory)
            const entryPoint = config.getOption('entryPoint');

            const matchedEntryPoint = files.find(_f => _f == entryPoint);

            if (matchedEntryPoint) {
                resolve(matchedEntryPoint)
            }
            else {
                reject(`No Entry Point Found ${entryPoint}`);
            }

        }
        catch (err) {
            reject(err);
        }

    })

}

module.exports = {
    createReadStream,
    findEntryPoint
}