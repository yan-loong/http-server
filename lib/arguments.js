const config = require("./config");
const argv = require('minimist')(process.argv.slice(2));

if (argv.h || argv.help) {
    console.log([
        'usage: http-server [path] [options]',
        '',
        'options:',
        '  -p --port    Port to use. If 0, look for open port. [8080]',
        '  -e --entryPoint    Entry Point. default is index.html in current working directory',
        '  -o --open    Open browser window after starting the server.',
        '  -h --help          Print this list and exit.',
        '  -v --version       Print the version and exit.'
    ].join('\n'));

    process.exit();
}

if (argv.v || argv.version) {
    const { version } = require("../package.json");
    console.log(`Curretn Version is`, version);
    process.exit();
}

function parseArgument() {
    const validArgvKeys = faindValidArguments();
    for (let _k of validArgvKeys) {
        const key = config.mappedOption.get(_k);
        config.setOption(key, argv[_k])
    }
}


function faindValidArguments() {
    const argvKeys = Object.keys(argv);
    const validArgvKeys = argvKeys.filter(_k => config.mappedOption.has(_k));

    return validArgvKeys
}

module.exports = { parseArgument }