const mappedOption = new Map([
    ['p', 'port'],
    ['o', 'open'],
    ['e', 'entryPoint'],
    ['h', 'host'],
    ['port', 'port'],
    ['open', 'open'],
    ['host', 'host'],
    ['entryPoint', 'entryPoint']
]);

const config = {
    port: 3000,
    open: false,
    host: '127.0.0.1',
    entryPoint: './index.html',
    entryDir: process.cwd(),
    entryName: 'index.html'
};

function setOption(optionName, optionValue) {
    config[optionName] = optionValue
}

function getOption(optionName) {
    return config[optionName];
}


module.exports = {
    config,
    setOption,
    getOption,
    mappedOption
}