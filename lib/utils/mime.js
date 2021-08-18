const MimeLookup = require('mime-lookup');
const mime = new MimeLookup(require('mime-db'));

function findMimeType(url) {
    const splitedUrl = url.split("/");
    const fileName = splitedUrl[splitedUrl.length - 1]
    const mimeType = mime.lookup(fileName);

    return mimeType
}

module.exports = {
    findMimeType
}